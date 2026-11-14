---
title: Rough Terrain Robotics Simulator
shortTitle: A world to test robots in
description: A modular outdoor robotics simulator connecting physics, sensing, control, and data recording.
category: Robotics
status: In development
year: '2026'
order: 1
image: /images/robotics-simulator.svg
imageAlt: Conceptual illustration of a wheeled robot above a wireframe terrain, with physics, sensing, and control layers.
tags: [C++, Python, Project Chrono, ZeroMQ, ROS 2]
role: Core framework, physics integration, environment, visualization, Python API, and CLI.
context: Team project · University of Oulu
---

## The problem

Testing an outdoor robot involves more than making a model move. The physics, sensor outputs, commands, and recorded data need to describe the same world. Our project is building a modular framework for those pieces to work together.

## How the system fits together

Project Chrono is the authoritative physics engine. The surrounding framework connects the robot and terrain models, sensing, communication, control, and recording. A Python interface and command line tools make experiments repeatable without depending on a graphical interface.

The architecture keeps the physics world separate from the human facing visualization. This matters because a visual effect in a renderer does not automatically become part of the robot’s sensor data.

## My contribution

I work on the core framework, physics integration, environment, visualization, Python API, and command line interface. My teammates work on the robot model, sensors, communication, recording, controls, graphical interface, and testing.

The core and server have been built and exercised with stepping and pose streaming. The communication layer uses ZeroMQ, with separate request and publication paths.

## What we are working toward

- Moving a robot between waypoints and supporting manual control.
- Bringing STL geometry into the environment.
- Connecting sensor outputs and recording experiment data.
- Keeping component boundaries clear so individual parts can be replaced.
- Handling collisions and stopping behavior.

## Current stage

This is ongoing university project work. The emphasis is on the framework, integration, and repeatable experiments. The architecture illustration above is a system concept, not a screenshot or a benchmark result.
