from fastapi import APIRouter, HTTPException
from typing import List
from ..models.product import Product
from ..utils.security import get_current_user

router = APIRouter()

# Mock database
products_db = []

@router.post("/products/", response_model=Product)
async def create_product(product: Product):
    products_db.append(product)
    return product

@router.get("/products/", response_model=List[Product])
async def get_products(skip: int = 0, limit: int = 10):
    return products_db[skip: skip + limit]

@router.get("/products/{product_id}", response_model=Product)
async def get_product(product_id: int):
    for product in products_db:
        if product.id == product_id:
            return product
    raise HTTPException(status_code=404, detail="Product not found")

@router.put("/products/{product_id}", response_model=Product)
async def update_product(product_id: int, product: Product):
    for index, existing_product in enumerate(products_db):
        if existing_product.id == product_id:
            products_db[index] = product
            return product
    raise HTTPException(status_code=404, detail="Product not found")

@router.delete("/products/{product_id}")
async def delete_product(product_id: int):
    for index, existing_product in enumerate(products_db):
        if existing_product.id == product_id:
            del products_db[index]
            return {"detail": "Product deleted"}
    raise HTTPException(status_code=404, detail="Product not found")