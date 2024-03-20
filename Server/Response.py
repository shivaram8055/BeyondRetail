import json

def load_products_data():
    # Load the products from the JSON file
    with open('Database.json', 'r', encoding='utf-8') as file:
        products_data = json.load(file)
    return products_data

def check_availability(product_name, products):
    for product in products:
        if product["title"].lower() == product_name.lower():
            return True
    return False

def get_product_details(product_name, products):
    for product in products:
        if product["title"].lower() == product_name.lower():
            return product
    return None

def response_data(intent, entities):
    products_data = load_products_data()

    if intent == 'productAvailability':
        # Extracting product_name from the provided entities
        product_name = entities['productName:productName'][0]['value']
        
        if product_name:
            if check_availability(product_name, products_data):
                product_details = get_product_details(product_name, products_data)
                return [f"The requested {product_name} is available for {product_details['price']}",
                    {"title": product_details['title'], "itemImg": product_details['itemImg'], "price": product_details['price']}]
                
            else:
                return [f"Sorry, {product_name} is not found in our inventory."]
        return ["I'm sorry, I couldn't understand which product you're looking for. Start again"]

    elif intent == 'addToCart':
        # Extracting product_name from the provided entities
        product_name = entities['productName:productName'][0]['value']
       
        if product_name:
            if check_availability(product_name, products_data):
                product_details = get_product_details(product_name, products_data)
                response_str = f"Order placed for {product_name.capitalize()}. Details: Title: {product_details['title'].capitalize()}, Price: {product_details['price']}"
                return [response_str, {"title": product_details['title'], "itemImg": product_details['itemImg'], "price": product_details['price']}]
            else:
                return [f"Sorry, {product_name.capitalize()} is not found in our inventory.",'']
        return ["I'm sorry, I couldn't understand which product you want to order.",'']

    elif intent == 'productDetails':

        # Extracting product_name from the provided entities
        product_name = entities['productName:productName'][0]['value']

        if product_name:
            if check_availability(product_name, products_data):
                product_details = get_product_details(product_name, products_data)
                specifications = ', '.join(product_details['specifications'])
                return [f"Specifications for {product_name}: {specifications}", {"title": product_details['title'], "itemImg": product_details['itemImg'], "price": product_details['price']}]
            else:
                return [f"Sorry, {product_name} is not found in our inventory.",'']
        return ["I'm sorry, I couldn't understand which product's specifications you want.",'']
    elif intent == 'page':
        product_name = entities['page:page'][0]['value']
        if product_name =="home page":
            return "/home"
        elif product_name == 'cart':
            return "/checkout"
    elif intent == "browseProducts":
        product_name = entities['categoryName:categoryName'][0]['value']
        return [product_name]
    else:
        return ["I'm sorry, I didn't understand your request. Can you please provide more details?",'']

# # Example usage
# entities = [{'product_name:product_name': [{'body': 'iPhone 12', 'confidence': 0.9592759403171325, 'end': 13, 'entities': [], 'id': '1294159231264346', 'name': 'product_name', 'role': 'product_name', 'start': 4, 'type': 'value', 'value': 'iphone 12'}]}]

# print(product_name)
# intent = 'orderProduct'
# response_list = response_from_data(intent, entities)
# print(response_list[0])  # Print response string
# print(response_list[1])  # Print product details dictionary


# entities=[{'product_name:product_name': [{'body': 'iPhone 12', 'confidence': 0.9592759403171325, 'end': 13, 'entities': [], 'id': '1294159231264346', 'name': 'product_name', 'role': 'product_name', 'start': 4, 'type': 'value', 'value': 'iphone 12'}]}]
# intent="orderProduct"

# order_product_response=response_from_data("orderProduct",entities)
# specs_product_response=response_from_data("productSpecifications",entities)
# available_product_response=response_from_data("productAvailability",entities)

# print(f'{order_product_response} \n {specs_product_response} \n {available_product_response}')