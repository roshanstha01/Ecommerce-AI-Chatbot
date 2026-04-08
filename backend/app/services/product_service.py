import json

def load_products():
    with open("app/data/products.json", "r") as f:
        return json.load(f)

def search_products(query: str):
    products = load_products()
    query = query.lower()

    results = []

    for product in products:
        if product["category"] in query or product["name"].lower() in query:
            results.append(product)

    # price filter
    if "under" in query:
        words = query.split()
        for i, w in enumerate(words):
            if w.isdigit():
                max_price = int(w)
                results = [p for p in results if p["price"] <= max_price]

    return results