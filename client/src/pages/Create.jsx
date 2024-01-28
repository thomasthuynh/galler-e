import { useState } from "react";

import { preview } from "../assets";
import { Loader } from "../components";

const Create = () => {
  const [generatingImg, setGeneratingImg] = useState(false);
  const [sharingImg, setSharingImg] = useState(false);

  return (
    <section className="min-h-screen w-full bg-secondary py-16">
      <div className="mx-auto flex w-[90%] max-w-7xl">
        <div className="text-white">
          <h1 className="text-4xl font-bold text-primary">Create</h1>
          <p className="py-4">
            Create imaginative and visually stunning images and share them with
            the community.
          </p>

          <form action="">
            <div className="mb-4 flex flex-col">
              <label htmlFor="name" className="pb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="rounded p-2 text-black"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="prompt" className="pb-2">
                Prompt
              </label>
              <input
                type="text"
                name="prompt"
                className="rounded p-2 text-black"
              />
            </div>

            <div className="relative my-6 h-64 w-64 rounded bg-white">
              <img src={preview} alt="Preview" className="opacity-50" />

              {generatingImg && (
                <div className="absolute inset-0 flex items-center justify-center bg-[rgb(0,0,0,0.5)]">
                  <Loader />
                </div>
              )}
            </div>

            <button className="rounded bg-primary px-6 py-2 text-white hover:opacity-80 focus:opacity-80">
              {generatingImg ? "Generating..." : "Generate"}
            </button>
          </form>

          <div className="pt-8">
            <p className="pb-4">
              Once you have created the image you want, you can share it with
              others in the community.
            </p>

            <button className="rounded bg-primary px-6 py-2 text-white hover:opacity-80 focus:opacity-80">
              {sharingImg ? "Sharing..." : "Share with the community"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Create;
