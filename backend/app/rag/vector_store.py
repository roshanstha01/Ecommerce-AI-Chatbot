import chromadb
from sentence_transformers import SentenceTransformer

CHROMA_PATH = "chroma_db"
COLLECTION_NAME = "store_knowledge"

client = chromadb.PersistentClient(path=CHROMA_PATH)
collection = client.get_or_create_collection(name=COLLECTION_NAME)

model = SentenceTransformer("all-MiniLM-L6-v2")


def add_chunks_to_collection(chunks):
    if not chunks:
        return

    embeddings = model.encode(chunks).tolist()
    ids = [f"doc_{i}" for i in range(len(chunks))]

    existing = collection.count()
    if existing > 0:
        collection.delete(ids=collection.get()["ids"])

    collection.add(
        documents=chunks,
        embeddings=embeddings,
        ids=ids
    )


def search_chunks(query: str, top_k: int = 3):
    query_embedding = model.encode([query]).tolist()

    results = collection.query(
        query_embeddings=query_embedding,
        n_results=top_k
    )

    return results.get("documents", [[]])[0]