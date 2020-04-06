# Alignments between W3C Thing Description and LANDRS

![Alignments](td-alignments.svg)

This diagram provides a prototype to harmonize VSS signals in "Automotive UGVs" as a signal protocol vs [MAVlink](https://arxiv.org/pdf/1906.10641.pdf) for other "drone types" (UAV,UGV, UWV) etc.

---

The [Hybrid Location-Agnostic incremental Reasoner](https://github.com/ucbl/HyLAR-Reasoner) is written in NodeJS using the [RDFS](https://www.w3.org/TR/rdf-mt/#RDFSRules) and [OWL-RL](https://www.w3.org/TR/owl2-profiles/#Reasoning_in_OWL_2_RL_and_RDF_Graphs_using_Rules) and provides a server API for NodeJS.
There is a set of [SHACL Shapes](https://github.com/w3c/wot-thing-description/blob/master/validation/td-validation.ttl) for the Thing Description Ontology that could provide the basis for checking the interface types.

---

### References

1. [VSSo: a Vehicle Signal and AttributeOntology for the Web of Things](http://www.semantic-web-journal.net/system/files/swj2085.pdf)
2. [W3C Thing Description Documentation](https://www.w3.org/TR/wot-thing-description/)
3. [VSS-Ontology](https://github.com/klotzbenjamin/vss-ontology/blob/master/vsso.ttl)
4. [Thing Description Ontology](https://www.w3.org/2019/wot/td)
5. [The SOSA/SSN Ontology: A Joint W3C and
   OGC Standard Specifying the Semantics of
   Sensors, Observations, Actuation, and
   Sampling](http://www.semantic-web-journal.net/system/files/swj1804.pdf)
6. [Modeling Smart Sensors on top of SOSA/SSN and WoT TD with the Semantic Smart Sensor Network \(S3N\)
   modular Ontology](https://hal.archives-ouvertes.fr/hal-01885330/document)
7. [eWoT: A Semantic Interoperability Approach forHeterogeneous IoT Ecosystems Based on the Webof Things](https://www.mdpi.com/1424-8220/20/3/822)
8. [UAV IoT Framework Views and Challenges: TowardsProtecting Drones as “Things”](https://www.mdpi.com/1424-8220/18/11/4015/htm)
9. [Micro Air Vehicle Link (MAVLink) in a Nutshell:
   A Survey](https://arxiv.org/pdf/1906.10641.pdf)
