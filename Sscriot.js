async function addItem() {
  const name = document.getElementById('itemName').value.trim();
  const type = document.getElementById('itemType').value;

  if (!name) {
    alert('Please enter an item name.');
    return;
  }

  try {
    const res = await fetch('https://YOUR_SERVER_DOMAIN/api/add-item', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, type }),
    });
    const data = await res.json();
    if (data.success) {
      alert(`Item "${name}" added successfully.`);
    } else {
      alert('Failed to add item.');
    }
  } catch (error) {
    alert('Error sending request.');
    console.error(error);
  }
}

async function addSeason(range) {
  try {
    const res = await fetch('https://YOUR_SERVER_DOMAIN/api/add-season', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ range }),
    });
    const data = await res.json();
    if (data.success) {
      alert(`Season ${range} battle pass added.`);
    } else {
      alert('Failed to add season.');
    }
  } catch (error) {
    alert('Error sending request.');
    console.error(error);
  }
}

async function addChallenges() {
  try {
    const res = await fetch('https://YOUR_SERVER_DOMAIN/api/add-challenges', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    if (data.success) {
      alert('All challenges added.');
    } else {
      alert('Failed to add challenges.');
    }
  } catch (error) {
    alert('Error sending request.');
    console.error(error);
  }
}