# Decentralized Trust Graph Credentials

Aligned against [DTG Credential Specification](https://github.com/trustoverip/dtgwg-cred-spec) main, reviewed 2026-08-20.

## VMC (Membership Credential)
- Purpose: Establishes a node in the DTG by defining membership in a VTC or VTN.
- [membership-credential.json](membership-credential.json)
- `did:cid:bagaaieravnv5onsflewvrz6urhwfjixfnwq7bgc3ejhlrj2nekx75ddhdupq`

## VRC (Relationship Credential)
- Purpose: Creates a directed trust edge between two nodes. Two VRCs (one each direction) form a complete DTG edge.
- [relationship-credential.json](relationship-credential.json)
- `did:cid:bagaaieras2jx67ejklsa4qmmsnnuxst7rc2vpdifzsic7r32p7zxmecybqga`

## VIC (Invitation Credential)
- Purpose: Authorizes a prospective member to join a VTC or VTN when presented to the VTA/PEP.
- [invitation-credential.json](invitation-credential.json)
- `did:cid:bagaaiera62jw6kjy3x43zndooqapq2yu6e47tgfkac6ksuxj4bphvcoplzna`

## VPC (Persona Credential)
- Purpose: Links a persona DID (P-DID) to an existing relationship.
- [persona-credential.json](persona-credential.json)
- `did:cid:bagaaierazqjzn6pap5muvswyhde2nj7ptx3hre2lmlbkkjjcqxwbnxkkumsq`

## VEC (Endorsement Credential)
- Purpose: Attaches endorsements (skills, reputation) to a party.
- [endorsement-credential.json](endorsement-credential.json)
- `did:cid:bagaaierabrfzc4dx2iuxki64mwjakyw5s6mgp7sk75a3nnzxv5doeyflpsnq`

## VWC (Witness Credential)
- Purpose: Third-party attestation bound to a trust-task exchange and to the exact witnessed VRC using a required JCS/SHA-256 digest.
- [witness-credential.json](witness-credential.json)
- `did:cid:bagaaiera5i3lobqxncn25lxvqznfiak4gvujojpddjft6ub25ys7xbrbfc5a`

## DTG Schema Pack
- DID Group includes all of the above
- `did:cid:bagaaiera3qko5a3y6w4bjvr3iedqjt5flkvqi4gm2ytjip3c2ix25hezflzq`

