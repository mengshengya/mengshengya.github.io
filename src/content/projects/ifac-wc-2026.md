## Why trust belongs inside the observer

Connected vehicle platoons use onboard sensing together with state information exchanged over V2V links. Those packets can be delayed, dropped, replayed, falsified, or made unreliable by a faulty neighbor. If a conventional distributed observer accepts them with fixed weights, a compromised estimate can propagate through the communication graph.

This work places behavioral trust directly in the distributed estimation loop. Each host vehicle checks incoming packets before use, evaluates their consistency, and converts the resulting trust scores into adaptive observer weights. Information from a source that becomes inconsistent is suppressed while useful cooperation from reliable vehicles is retained.

## Observer architecture

### Local anchor and distributed estimate

Every vehicle runs a local observer from its onboard measurements and a distributed observer that estimates the fleet state. The local-observer anchor keeps the distributed estimate tied to host-side information and prevents all estimates from drifting toward a common biased value.

### Validity and behavioral trust checks

A receiving-side gate first checks whether each packet is authenticated, fresh, and physically admissible. Accepted packets are then scored using sender self-consistency, agreement with the host estimate, and agreement with host-side relative measurements. Smoothed vehicle-level trust scores determine which neighbor information enters the observer and with what influence.

### Finite-window rollback

Trust decisions may arrive after a corrupted packet has already affected an estimate. The rollback mechanism stores a finite recent history, returns to a checkpoint, masks sources rejected retrospectively, and replays the observer updates. This mitigates delayed decisions without claiming that every reset must reduce the error.

## Stability and validation scope

The analysis provides checkable sufficient conditions for local nonlinear input-to-state stability under bounded model uncertainty, input mismatch, accepted corruption, and trust-induced switching. Direct local anchors and sequentially rooted accepted graphs give two routes to contraction.

The validation combines a five-vehicle numerical campaign with a mixed QCar/LIMO 1:10-scale platform. The tested cases include position and speed corruption, simultaneous local-global corruption, packet drops, delayed trust decisions, and a trust-gated ACC/CACC trajectory check.

The guarantees are deliberately conditional. They do not establish universal attack detection, exact reconstruction of a rejected malicious vehicle, formal string stability, or full two-dimensional collision avoidance. A physically plausible bias inside the accepted packet set can still leave a nonzero ultimate estimation error.
