---
title: Ephemeral entities
postdate: 2025/03/09
tags:
    - library
    - works
    - entities
---

<!-- At the nascent stage of this little research project, I've been so starving for candid, well-informed discussion of the bones of the LRM, that I took a truly desperate measure and spoke to ChatGPT on the topic. -->

At the moment, I'm really just trying to formulate an objection to the way IFLA models relations between work, expression, manifestation, and item. The ontology of (musical) works is far from settled science, so I'm aware that I'm opening a much larger can of worms than I may be prepared to deal with, but this should at least serve as a gateway into bigger discussions that tie in my thoughts on notation as work-mediator.

One problem that keeps pebbling around my brain is the issue of the *uncaptured expression*.

Per IFLA LRM documentation:
1. An expression comes into being with the creation of its first manifestation.
2. An expression *cannot exist* without an associated manifestation.
3. A manifestation requires a *carrier* and results from the capture of one or more expressions.

Yet we have no difficulty conceiving of a musical work whose only expression remains uncaptured: any work premiered prior to the invention of recorded sound, for instance. Per the LRM, these uncaptured performances cannot be, at least bibliographically speaking, expressions at all, unless we were to define "capture" and "carrier" extraordinarily liberally.

As much as I'd like it to, the LRM doesn't set out to be an account of the ontology of creative works, merely a model by which we organize bibliographic universes.
The party line, presumably, would be that uncaptured expressions won't have directly associated manifestations and items, ergo, they need not be considered bibliographically salient entities.

As such, the lack of an account of these "ephemeral entities" does not pose any particular issue for the cataloger. By the time an item ends up in her hands, it will have come down the long chain from artistic conception to mass production, ensuring that relevant work, expression, manifestation entities exist to be documented.

A small but important objection may be raised here, though. We might imagine the following scenario: 

An eighteenth-century opera critic is attending the premiere of a new work. He speeds home after the performance to write his review which is subsequently published in a local periodical.

The opera, sadly, only runs for a short time and is quickly forgotten. It was a quickly-thrown-together production and left no published scores (and given the time period no recordings either). 

Three centuries later, a cataloger comes across our critic's review in a collection of opera criticism and wants to describe the relationship between this work of criticism and its subject.

If our critic were discussing a Mozart arrangement, our cataloger might use the (Official RDA) element

> [criticism] --> critique of expression --> [arrangement]

to describe this relationship.

However, given that the opera he discusses leaves no bibliographic trace in the form of captured scores or recordings, our element "critique of expression" therefore has no valid range: the uncaptured performance does not constitute a bibliographically salient expression of its work, despite the fact that bibliographic evidence (e.g. the review) would imply the existence of some work and its (ephemeral) expression.

---

Given the nascent state of this project and the seeming lack of resources that candidly discuss LRM philosophy, I took the desperate measure of chatting with ChatGPT on the topic in the hopes that it would dredge up a few resources or at least let me know if there was some gaping logical hole in my argument (again, desperate).

First, it was suggested that the LRM as it stands does, in fact, incorporate ephemeral entities like (unrecorded) events by way of *Res*, the arch-entity, which encompasses all things that exist. This might be trivially true, but I take it to be pretty unsatisfying---classing something with the *Res* entity fails to link it in any real way to a *Work* in the same way that classing it an *Expression* would.

Second: from this interchange, it seems like the major point of friction is that I'm looking for an ontology of musical works and their derivations that doesn't need to compromise its comprehensiveness in light of cataloging necessities. The LRM seems to get so close to a useful philosophical construct which could say so much more about our world, but stops short in order to make things more convenient for library professionals...

In short, the LRM demonstrates a (seemingly necessary) bias toward fixity over ephemerality because it is only the *fixed* entities that end up populating our shelves and digital collections.

I guess I'm dreaming of a few important but inobtrusive modifications we could make to the LRM so that it hews closer to the structure of reality and reflects actual practices of music-making (and, correspondingly, other forms of creation) more precisely.

---

#### 2025-03-25 Update:

I just came across a [2007](https://dlib.indiana.edu/projects/variations3/docs/v3FRBRreport.pdf) paper, "Definitions of a FRBR-based Metadata Model for the Indiana University Variations3 Project" (2007) which expressly calls for a need to document uncaptured performances as expressions. They write:

> In Variations3, we will treat original performances of Works as Expressions worth keeping track of, even if we do not hold a recording of that performance. This will allow us to record dates, performers, etc., associated with that original performance, regardless of whether it occurred in 1589, 1789 or 1989.

This at least goes to show that I'm not alone in my thinking that FRBR/IFLA are unduly restrictive in their requirement that an expression result in some captured manifestation.
