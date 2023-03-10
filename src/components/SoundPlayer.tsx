import { useState } from "react";
import axios from "axios";

const SoundCloudPlayer = () => {
  const [embedUrl, setEmbedUrl] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const trackUrl = e.target.trackUrl.value;

    try {
      const response = await axios.get(
        `https://soundcloud.com/oembed?url=${trackUrl}&format=json`
      );
      setEmbedUrl(response.data.html);
    } catch (error) {
      alert("Track not found. Please paste correct url!");
    }
  };

  return (
    <div className="p-10 bg-gray-100 rounded-lg mb-10">
      <h2 className="text-2xl font-semibold mb-6">SoundCloud Player</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <label
          htmlFor="trackUrl"
          className="block mb-2 font-semibold text-[#5A5A5A]"
        >
          Track URL
        </label>
        <input
          type="url"
          id="trackUrl"
          name="trackUrl"
          placeholder="Paste track url di sini!"
          className="w-full border-2 border-gray-300 p-2 rounded-lg"
          required
        />
        <button
          type="submit"
          className="bg-[#00DE9C] text-white px-4 py-2 rounded-full mt-4"
        >
          Get Embed Code
        </button>
      </form>
      {embedUrl && (
        <div
          dangerouslySetInnerHTML={{ __html: embedUrl }}
          className="mt-6"
        ></div>
      )}
    </div>
  );
};

export default SoundCloudPlayer;
