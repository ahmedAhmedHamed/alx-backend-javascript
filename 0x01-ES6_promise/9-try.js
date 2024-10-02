export default function guardrail(matchFunction) {
  const queue = [];
  try {
    queue.push(matchFunction());
  } catch (e) {
    queue.push(`Error: ${e.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
