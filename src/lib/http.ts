export async function postJSON<T>(url: string, body: T): Promise<null> {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body)
  })
  if (res.status === 204) return null
  if (res.status === 429) throw new Error('rate_limited')
  throw new Error('request_failed')
}