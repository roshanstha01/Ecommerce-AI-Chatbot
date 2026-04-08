from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from app.services.product_service import search_products
import os

app = FastAPI(title="E-commerce AI Chatbot API")

origins = [
    "http://localhost:3000",
    "https://ecommerce-ai-chatbot-rouge.vercel.app",
    "https://roshan-shrestha.name.np",
    "https://www.roshan-shrestha.name.np",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str
    history: list | None = []

STORE_INFO = {
    "shipping": "Standard shipping usually takes 3 to 5 business days. Express shipping takes 1 to 2 business days.",
    "refund": "Refunds are processed within 5 to 7 business days after approval.",
    "return": "Eligible products can be returned within 7 days of delivery if unused and in original packaging.",
    "payment": "We support debit cards, credit cards, eSewa, Khalti, and cash on delivery.",
    "order": "You can track your order from the tracking page using your order ID."
}

@app.get("/")
def root():
    return {"message": "Backend is running"}

@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/chat")
def chat(request: ChatRequest):
    query = request.message.lower()

    if any(word in query for word in ["show", "product", "buy", "price", "under", "shoes", "electronics", "clothing"]):
        products = search_products(query)
        if products:
            reply = "Here are some products:\n\n"
            for p in products:
                reply += f"- {p['name']} (Rs. {p['price']})\n"
            return {"reply": reply}

    if "shipping" in query or "delivery" in query:
        return {"reply": STORE_INFO["shipping"]}
    elif "refund" in query:
        return {"reply": STORE_INFO["refund"]}
    elif "return" in query:
        return {"reply": STORE_INFO["return"]}
    elif "payment" in query or "esewa" in query or "khalti" in query:
        return {"reply": STORE_INFO["payment"]}
    elif "order" in query or "track" in query:
        return {"reply": STORE_INFO["order"]}

    return {"reply": "Sorry, I could not find relevant information."}

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run("main:app", host="0.0.0.0", port=port)