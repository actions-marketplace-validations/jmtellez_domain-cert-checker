# Domain Cert Checker

This action outputs domain certificate details

## Inputs

### `hostname`

**Required** - Target hostname.

### `port`

Port number server is listening on. Default `443`.


## Output

### `details`

Domain details in json format:

```json
{
  daysRemaining: 143,
  valid: true,
  validFrom: '2022-03-15T00:00:00.000Z',
  validTo: '2023-03-15T23:59:59.000Z',
  validFor: [ 'github.com', 'www.github.com' ]
}
```

## Usage

```yaml
uses: actions/domain-cert-checker@v1.0
with:
  hostname: 'github.com'
  port: 443
```