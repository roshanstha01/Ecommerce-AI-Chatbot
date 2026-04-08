def chunk_text(text: str):
    sections = text.split("\n\n")
    return [s.strip() for s in sections if s.strip()]