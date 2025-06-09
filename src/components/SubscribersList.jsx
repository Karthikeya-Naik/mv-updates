import React, { useEffect, useState } from 'react';

const SubscribersList = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error state

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await fetch('https://backend.marichiventures.com/get_subscribers.php');
        if (!response.ok) throw new Error("Failed to fetch subscribers");
        const data = await response.json();
        setSubscribers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchSubscribers();
  }, []);

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const sendEmail = (email) => {
    if (isValidEmail(email)) {
      window.location.href = `mailto:${email}`;
    } else {
      alert("Invalid email address.");
    }
  };

  const handleSendMessage = async () => {
    if (!message.trim()) {
      alert("Please enter a message before sending.");
      return;
    }

    const confirmSend = window.confirm("Are you sure you want to send this message to all subscribers?");
    if (!confirmSend) return; // User cancelled

    try {
      const response = await fetch('https://backend.marichiventures.com/send_message.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) throw new Error("Failed to send message");

      const result = await response.text();
      alert(result);
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("There was an error sending the message: " + error.message);
    }
  };

  const handleDeleteSubscriber = async (email) => {
    if (!isValidEmail(email)) {
      alert("Invalid email address.");
      return;
    }

    const confirmDelete = window.confirm("Are you sure you want to delete this subscriber?");
    if (confirmDelete) {
      try {
        const response = await fetch('https://backend.marichiventures.com/delete_subscriber.php', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (!response.ok) throw new Error("Failed to delete subscriber");

        setSubscribers((prevSubscribers) =>
          prevSubscribers.filter((subscriber) => subscriber.email !== email)
        );
        alert("Subscriber deleted successfully.");
      } catch (error) {
        console.error("Error deleting subscriber:", error);
        alert("There was an error deleting the subscriber: " + error.message);
      }
    }
  };

  return (
    <div className="container mx-auto my-10 p-8 bg-white shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-600">Subscribers List</h1>
      
      {loading ? (
        <p className="text-center text-gray-500 text-lg">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500 text-lg">{error}</p>
      ) : subscribers.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No subscribers found.</p>
      ) : (
        <table className="min-w-full bg-gray-50 border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-blue-100 text-blue-700">
              <th className="py-3 px-6 border-b text-center">S.No</th>
              <th className="py-3 px-6 border-b text-center">Email</th>
              <th className="py-3 px-6 border-b text-center">Timestamp</th>
              <th className="py-3 px-6 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((subscriber, index) => (
              <tr key={index} className="hover:bg-blue-50 transition duration-150">
                <td className="py-2 px-6 border-b text-center">{index + 1}</td>
                <td className="py-2 px-6 border-b text-center text-gray-800 cursor-pointer hover:text-blue-600" onClick={() => sendEmail(subscriber.email)}>
                  {subscriber.email}
                </td>
                <td className="py-2 px-6 border-b text-center text-gray-600">{subscriber.subscribed_at}</td>
                <td className="py-2 px-6 border-b text-center">
                  <button 
                    onClick={() => handleDeleteSubscriber(subscriber.email)} 
                    className="bg-red-600 text-white font-semibold py-1 px-3 rounded hover:bg-red-700 transition duration-200"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
  
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700">Send Message to All Subscribers</h2>
        <textarea
          className="w-full h-32 p-4 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
        />
        <br/>
        <button
          onClick={handleSendMessage}
          className="mt-4 bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-blue-700 transition duration-200"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default SubscribersList;
