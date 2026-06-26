# OpenVTC State Normalization

## Purpose

OpenVTC implementation states and TIS assurance states are related, but they are not identical. v0.10.0 adds an explicit normalization profile so implementers do not silently treat implementation state as governance state.

## Relationship state mapping

| OpenVTC implementation state | TIS normalized relationship state |
|---|---|
| `RequestSent` | `requested` |
| `RequestAccepted` | `accepted` |
| `RequestRejected` | `rejected` |
| `Established` | `established` |
| `None` | `none` |

## Task evidence mapping

OpenVTC task evidence may also be mapped into the TSMM-aligned lifecycle vocabulary when used as runtime assurance evidence.

| OpenVTC condition | Lifecycle state |
|---|---|
| task created | `submitted` |
| task in progress | `working` |
| more authorization required | `auth-required` |
| task completed | `completed` |
| task failed | `failed` |
| task rejected | `rejected` |

## Validation

- `profiles/openvtc/openvtc-state-normalization.schema.json`
- `profiles/openvtc/openvtc-task-evidence.schema.json`
