from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from ..models.order import Order
from ..utils.security import get_current_user
from ..database import get_db

router = APIRouter()

@router.post("/orders/", response_model=Order)
def create_order(order: Order, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    db.add(order)
    db.commit()
    db.refresh(order)
    return order

@router.get("/orders/{order_id}", response_model=Order)
def get_order(order_id: int, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    order = db.query(Order).filter(Order.id == order_id).first()
    if order is None:
        raise HTTPException(status_code=404, detail="Order not found")
    return order

@router.get("/orders/", response_model=list[Order])
def get_orders(db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    orders = db.query(Order).all()
    return orders