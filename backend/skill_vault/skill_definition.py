class BaseSkill:
    def run(self, *args, **kwargs):
        raise NotImplementedError("This method should be overridden by subclasses.")

def skill_input(func):
    def wrapper(*args, **kwargs):
        # Decorator logic for input validation
        return func(*args, **kwargs)
    return wrapper

def skill_output(func):
    def wrapper(*args, **kwargs):
        # Decorator logic for output processing
        return func(*args, **kwargs)
    return wrapper

def skill_metadata(metadata):
    def decorator(func):
        # Attach metadata to the function
        func.metadata = metadata
        return func
    return decorator

@skill_metadata({"name": "Email Notifier", "description": "Notifies via email."})
class EmailNotifierSkill(BaseSkill):
    @skill_input
    def run(self, email_address, message):
        # Logic to send an email notification
        return {"status": "success", "to": email_address}

@skill_metadata({"name": "Data Processor", "description": "Processes data."})
class DataProcessorSkill(BaseSkill):
    @skill_input
    def run(self, data):
        # Logic to process data
        return {"status": "processed", "data": data}