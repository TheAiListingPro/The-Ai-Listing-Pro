export default function ListingForm() {
  return (
    <form method="POST" action="/api/zapier" encType="multipart/form-data">
      <input type="text" name="propertyName" placeholder="Property Name" required />
      <input type="file" name="photo" accept="image/*" />
      <textarea name="description" placeholder="Property Description"></textarea>
      <button type="submit">Submit Listing</button>
    </form>
  );
}