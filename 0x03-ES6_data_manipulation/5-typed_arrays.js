export default function createInt8TypedArray(length, position, value) {
  try {
    const buffer = new ArrayBuffer(length);
    const NewArray = new Int8Array(buffer);
    NewArray[position] = value;
    const nDate = new DataView(buffer);
    return nDate;
  } catch (err) {
    throw new Error('Position outside range');
  }
}
