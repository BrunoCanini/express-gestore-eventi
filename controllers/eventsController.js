const express = require("express");
const fs = require("fs");
const path = require("path");

const Event = require("../models/event");

function index (req, res) {

    const elements = Event.index()
    res.send(elements)
};

function store (req, res) {
    const newEvent = new Event(req.body)
    newEvent.store()
    res.send(newEvent)
};

function update (req, res) {
    const eventId = req.params.id;
    const id = Event.getId(eventId)
    res.send(id)
};

module.exports = {
    index,
    store,
    update
  }