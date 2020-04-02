# Drone Data Buddy Nodejs-Express example playground

[LANDRS](https://landrs.org) example "on drone" implementation playground using the nodejs express framework. It assumes a that a lightweight computer (Raspberry PI, etc) is interfaced to a [Ardupilot autopilot](https://ardupilot.org/dev/docs/raspberry-pi-via-mavlink.html) via MAVlink.

This is very loosely based on the directory and code structure of the sample ["Web of Things"](https://github.com/webofthings/webofthings.js) gateway and server reference implementation but updated to use more modern javascript syntax and modules as well as the W3C [Web of Things (WoT) Architecture](https://www.w3.org/TR/wot-architecture/) proposed recommendation, W3c [Thing Description (TD) Ontology](https://www.w3.org/2019/wot/td) which have evolved since the original code was written. It additionally uses W3C/OGC [Semantic Sensor Network Ontology](https://www.w3.org/TR/vocab-ssn/), [Extensions to the Semantic Sensor Network Ontology](https://www.w3.org/TR/vocab-ssn-ext/), [Schema.org](https://schema.org), [Data Catalog Vocabulary (DCAT) - Version 2](https://www.w3.org/TR/vocab-dcat-2/) and [schema](https://schema.landrs.org) developed for the LANDRS project as foundational vocabularies for the playground.
