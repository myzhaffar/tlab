import DefaultLayout from "@/components/DefaultLayout";
import SoundCloudPlayer from "@/components/SoundPlayer";

const SoundCloud = () => {
  return (
    <DefaultLayout>
      <div className="flex justify-center h-auto">
        <SoundCloudPlayer />
      </div>
    </DefaultLayout>
  );
};

export default SoundCloud;
