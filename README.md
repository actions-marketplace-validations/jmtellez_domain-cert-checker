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

```js
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
on: [push]

jobs:
  get_domain_details_job:
    runs-on: ubuntu-latest

    steps:
      - name: Get Domain details
        id: check
        uses: jmtellez/domain-cert-checker@v1.0.1
        with:
            hostname: 'github.com'
            port: 443
 
      - name: Print details
        run: echo ${{ steps.check.outputs.details }}
```