module.exports.Chatbotreply = function (message) {


    this.bot_age = 25;
    this.bot_name = "Meet-Bot";
    this.bot_university = "vnsgu";
    this.bot_Country = "India";


    message = message.toLowerCase()


    if (message.indexOf("hi") > -1 ||
        message.indexOf("hello") > -1 ||
        message.indexOf("Welcome") > -1) {
        return "hi";
    }
    else if (message.indexOf("age") > -1 &&
        message.indexOf("your")) {
        return "I'm " + this.bot_age;
    }
    else if (message.indexOf("how") > -1 &&
        message.indexOf("are") &&
        message.indexOf("you")) {
        return "I'm fine ^_^";
    }
    else if (message.indexOf("live") > -1 &&
        message.indexOf("where") &&
        message.indexOf("you")) {
        return "I'm live in " + this.bot_Country;
    }


    return "Sorry!, I didn't get it :( ";
}
