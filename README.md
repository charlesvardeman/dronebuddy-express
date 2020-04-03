# Drone Data Buddy Nodejs-Express example playground

[LANDRS](https://landrs.org) example "on drone" implementation playground using the nodejs express framework. It assumes a that a lightweight computer (Raspberry PI, etc) is interfaced to a [Ardupilot autopilot](https://ardupilot.org/dev/docs/raspberry-pi-via-mavlink.html) via MAVlink.

This is very loosely based on the directory and code structure of the sample ["Web of Things"](https://github.com/webofthings/webofthings.js) gateway and server reference implementation but updated to use more modern javascript syntax and modules as well as the W3C [Web of Things (WoT) Architecture](https://www.w3.org/TR/wot-architecture/) proposed recommendation, W3c [Thing Description (TD) Ontology](https://www.w3.org/2019/wot/td) which have evolved since the original code was written. It additionally uses W3C/OGC [Semantic Sensor Network Ontology](https://www.w3.org/TR/vocab-ssn/), [Extensions to the Semantic Sensor Network Ontology](https://www.w3.org/TR/vocab-ssn-ext/), [Schema.org](https://schema.org), [Data Catalog Vocabulary (DCAT) - Version 2](https://www.w3.org/TR/vocab-dcat-2/) and [schema](https://schema.landrs.org) developed for the LANDRS project as foundational vocabularies for the playground.

## Technologies used

This dronebuddy playground is developed using the [Node.js](https://nodejs.org/en/) framework and the lightweight web framework [Express](https://expressjs.com/). It uses [content-negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation) using the types `Content-Type: application/ld+json` and `Content-Type: application/json` for the api and `Content-Type: text/html` for human readable information about the endpoints. Models are generated using the [RDF Javascript libraries](http://rdf.js.org/), and a [leveldb](https://github.com/google/leveldb) backed [node-quadstore](https://github.com/beautifulinteractions/node-quadstore) and lightweight SPARQL endpoint [Node Quadstore SPARQL](https://github.com/beautifulinteractions/node-quadstore-sparql).

## Ardupilot Mavlink Resources

The GCS-uno ground station has Raspberry Pi [instructions](https://gcs.gitbook.io/uno/setup_navio2_guide) companion computer instructions to set up a nodejs connector to the python based [MAVProxy](http://ardupilot.github.io/MAVProxy/html/getting_started/download_and_installation.html#linux) via a udp port. The code for the [node proxy](https://github.com/GCS-uno/drone_board) sends both mavlink and video streams.

There are a couple of node libraries that can parse the mavlink messages in nodejs. The [omcaree/node-mavlink](https://github.com/omcaree/node-mavlink) is used by the GCS-uno system for decoding mavlink 1.0 messages, which is a bit out of date. An alternative package, [ifrunistuttgart/node-mavlink](https://github.com/ifrunistuttgart/node-mavlink) uses the MAVLink message definitions from the python [pymavlink](https://github.com/ArduPilot/pymavlink) package to generate typescript definitions and a typescript/javascript library for parsing messages.

Ardupilot has a simulation tool, [SITL Simulator](https://ardupilot.org/dev/docs/sitl-simulator-software-in-the-loop.html) that can connect via [a mavproxy interface](https://ardupilot.org/dev/docs/copter-sitl-mavproxy-tutorial.html).

[Dronekit-SITL](https://dronekit-python.readthedocs.io/en/latest/develop/sitl_setup.html) provides a convenient package for setting up SITL on Macos. These instructions include a section on connecting additional ground stations to Dronkit-SITL via MAVProxy.

### Development Strategy

The most promising pathway for development would seem to be a [docker container running Dronekit-SITL](https://github.com/emantas/uav-sitl-docker) that exposed mavproxy ports. The drone data buddy nodejs application could connect to mavproxy to create capture the relevant mavlink messages. There is a recent [blog post](https://javiermunhoz.com/blog/2018/06/08/open-source-uav-sitl-in-docker-mission-planner-and-mav-tools.html) that documents this approach for development.
