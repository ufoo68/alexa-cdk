import { Response } from 'ask-sdk-model'

import Alexa = require('ask-sdk-core')

const LaunchRequestHandler = {
  canHandle(handlerInput: Alexa.HandlerInput): boolean {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest'
  },
  handle(handlerInput: Alexa.HandlerInput): Response {
    const speechText = 'なんか喋ってください。'
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse()
  },
}
const AngryIntentHandler = {
  canHandle(handlerInput: Alexa.HandlerInput): boolean {
    return (
      handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
      handlerInput.requestEnvelope.request.intent.name === 'AngryIntent'
    )
  },
  handle(handlerInput: Alexa.HandlerInput): Response {
    const speechText = 'ちょかんなや！'
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt('なんか喋ってください。')
      .getResponse()
  },
}
const ComeinIntentHandler = {
  canHandle(handlerInput: Alexa.HandlerInput): boolean {
    return (
      handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
      handlerInput.requestEnvelope.request.intent.name === 'ComeinIntent'
    )
  },
  handle(handlerInput: Alexa.HandlerInput): Response {
    const speechText = 'きやる。'
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt('なんか喋ってください。')
      .getResponse()
  },
}
const DumpIntentHandler = {
  canHandle(handlerInput: Alexa.HandlerInput): boolean {
    return (
      handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
      handlerInput.requestEnvelope.request.intent.name === 'DumpIntent'
    )
  },
  handle(handlerInput: Alexa.HandlerInput): Response {
    const speechText = 'ほかす。'
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt('なんか喋ってください。')
      .getResponse()
  },
}
const HardIntentHandler = {
  canHandle(handlerInput: Alexa.HandlerInput): boolean {
    return (
      handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
      handlerInput.requestEnvelope.request.intent.name === 'HardIntent'
    )
  },
  handle(handlerInput: Alexa.HandlerInput): Response {
    const speechText = 'かなんわ。'
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt('なんか喋ってください。')
      .getResponse()
  },
}
const StriveIntentHandler = {
  canHandle(handlerInput: Alexa.HandlerInput): boolean {
    return (
      handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
      handlerInput.requestEnvelope.request.intent.name === 'StriveIntent'
    )
  },
  handle(handlerInput: Alexa.HandlerInput): Response {
    const speechText = 'きばる。'
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt('なんか喋ってください。')
      .getResponse()
  },
}
const CancelAndStopIntentHandler = {
  canHandle(handlerInput: Alexa.HandlerInput): boolean {
    return (
      handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
      (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent' ||
        handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent')
    )
  },
  handle(handlerInput: Alexa.HandlerInput): Response {
    const speechText = 'ほな！'
    return handlerInput.responseBuilder.speak(speechText).getResponse()
  },
}

const ErrorHandler = {
  canHandle(): boolean {
    return true
  },
  handle(handlerInput: Alexa.HandlerInput): Response {
    const speechText = 'もっかい、いってください。'

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse()
  },
}

exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    AngryIntentHandler,
    CancelAndStopIntentHandler,
    ComeinIntentHandler,
    DumpIntentHandler,
    HardIntentHandler,
    StriveIntentHandler,
  )
  .addErrorHandlers(ErrorHandler)
  .lambda()
