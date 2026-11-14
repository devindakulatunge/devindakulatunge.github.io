---
title: Embedded Event Sensing
shortTitle: When should a sensor be trusted?
description: A bench prototype investigating signal quality checks for an event detector on a Raspberry Pi Pico W.
category: Embedded systems
status: Research prototype in development
year: '2026'
order: 2
image: /images/embedded-sensing.svg
imageAlt: Conceptual signal pipeline from a waveform through a Pico W based quality check to extracted features and an alert.
tags: [Raspberry Pi Pico W, C/C++, Signal quality, MQTT and TLS]
role: Sensors, Pico firmware, bench fixture, and local outputs; shared testing, analysis, reporting, and demonstration.
context: IoT course research project · University of Oulu
---

## The research question

Can signal quality checks reduce false alerts without increasing missed events, and how do disturbances affect notification delay?

The motivating problem is infant feeding risk, where an event may not have an obvious visible warning. Our course project is a bench study using artificial swallow-like sound bursts and movement pauses. No infants participate in these tests.

## The approach

The planned prototype extracts features, checks signal quality, and controls local outputs on a Raspberry Pi Pico W using C/C++. A private Wi-Fi network connects it to a Linux gateway through MQTT. The gateway stores sessions and serves the dashboard, with TLS and authenticated access planned for communication.

The evaluation compares operation with and without quality checks under two scenarios with different disturbance conditions. False alerts, missed events, and notification delay are the outcomes of interest.

## Engineering questions

- Which signal quality checks are useful on a constrained device?
- How should unreliable measurements influence an event decision?
- How much delay does additional checking introduce?
- What needs to be logged to make a comparison reproducible?

## My contribution

I am responsible for the sensors, Pico firmware, bench fixture, and local outputs. My teammate is responsible for the gateway, dashboard, secure communication, and evaluation scripts. We share testing, analysis, reporting, and the demonstration.

## Current stage

The proposal has been submitted and the design and implementation are ongoing. No evaluation results are claimed here. This is a course research prototype, not a clinically validated detector or a medical device.
