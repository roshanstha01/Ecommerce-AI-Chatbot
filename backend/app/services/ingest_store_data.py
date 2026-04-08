from pathlib import Path
from app.rag.chunker import chunk_text
from app.rag.vector_store import add_chunks_to_collection

DATA_FILE = Path("app/data/store_knowledge.txt")


def ingest_text_file():
    if not DATA_FILE.exists():
        raise FileNotFoundError(f"{DATA_FILE} not found")

    text = DATA_FILE.read_text(encoding="utf-8")
    chunks = chunk_text(text)
    add_chunks_to_collection(chunks)

    return {
        "message": "Knowledge base ingested successfully",
        "chunks_added": len(chunks)
    }


if __name__ == "__main__":
    result = ingest_text_file()
    print(result)