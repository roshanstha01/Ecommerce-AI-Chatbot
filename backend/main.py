from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from app.rag.vector_store import search_chunks
from app.services.product_service import search_products

from app.rag.vector_store import search_chunks
from app.services.ollama_service import generate_rag_answer


app = FastAPI(title="E-commerce AI Chatbot API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str
    history: list | None = []

from app.data.store_data import STORE_INFO

@app.get("/")
def root():
    return {"message": "Backend is running"}

@app.get("/health")
def health():
    return {"status": "ok"}

'''@app.post("/chat")
def chat(request: ChatRequest):
    query = request.message.lower()

    # 🔥 Product search trigger
    if any(word in query for word in ["show", "product", "buy", "price"]):
        products = search_products(query)

        if products:
            reply = "Here are some products:\n\n"
            for p in products:
                reply += f"- {p['name']} (Rs. {p['price']})\n"
            return {"reply": reply}

    # Normal RAG + LLM
    retrieved_docs = search_chunks(request.message, top_k=2)

    answer = generate_rag_answer(
        request.message,
        retrieved_docs,
        request.history
    )

    return {"reply": answer}'''

@app.post("/chat")
def chat(request: ChatRequest):
    query = request.message.lower()

    # Product search
    if any(word in query for word in ["show", "product", "buy", "price", "under"]):
        products = search_products(query)

        if products:
            reply = "Here are some products:\n\n"
            for p in products:
                reply += f"- {p['name']} (Rs. {p['price']})\n"
            return {"reply": reply}

    # RAG fallback
    retrieved_docs = search_chunks(request.message, top_k=1)

    if retrieved_docs:
        return {"reply": retrieved_docs[0]}

    return {"reply": "Sorry, I could not find relevant information."}

@app.post("/rag-test")
def rag_test(request: ChatRequest):
    docs = search_chunks(request.message, top_k=3)
    return {"matches": docs}