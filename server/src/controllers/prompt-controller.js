// const openai = require("openai")
const openai = require("../config/openai")
const inputPrompt = require("../models/input-prompt")

module.exports = {
    async sendText(req, res){
        const openaiAPI = openai.configuration()
        const inputModel = new inputPrompt(req.body)
        try{
            const response = await openaiAPI.createCompletion(
                openai.textCompletion(inputModel)
                // openai.textCompletion("hello world em python")
            )
            return res.status(200).json({
                sucess: true,
                data: response.data.choices[0].text
            })
        } catch (error){
            return res.status(400).json({
                sucess: false, 
                error: error.response 
                ? error.response.data
                : "There was an inssue on the server"
            })
        }
    }
}