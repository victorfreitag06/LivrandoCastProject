import mercadopago

def gerar_link_pagamento():
    sdk = mercadopago.SDK("APP_USR-4021896762183709-011613-87bf49866e8f6c62189da6e63499ff0f-1284722156")

    payment_data = {
        "items": [
            {"id": "1", "title": "Camisa", "quantity": 1, "currency_id": "BRL", "unit_price": 0.1}
        ],
        "back_urls": {
            "success": "http://127.0.0.1:5000/compracerta",
            "failure": "http://127.0.0.1:5000/compraerrada",
            "pending": "http://127.0.0.1:5000/compraerrada",
        },
        "auto_return": "all"
    }
    result = sdk.preference().create(payment_data)
    payment = result["response"]
    link_iniciar_pagamento = payment["init_point"]
    return link_iniciar_pagamento