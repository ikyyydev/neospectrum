import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Previewdata } from "@/constants";

const ThemePreview = () => {
  return (
    <section
      className="w-full min-h-screen py-[50px] md:py-[120px] bg-secondary-foreground"
      id="preview"
    >
      <div className="container w-full h-full">
        <div className="w-full flex justify-center mb-[38px]">
          <h2 className="text-3xl md:text-4xl text-white font-semibold">
            Theme Preview
          </h2>
        </div>
        <div className="w-full h-full flex flex-col items-center">
          <Tabs defaultValue="midnight" className="w-full gap-[30px]">
            <TabsList className="w-[385px] h-[43px] rounded-full">
              {Previewdata.map((item, index) => {
                return (
                  <TabsTrigger key={index} value={item.name.toLowerCase()}>
                    {item.name}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {Previewdata.map((item, index) => {
              return (
                <TabsContent key={index} value={item.name.toLowerCase()}>
                  <img
                    src={item.image}
                    alt={item.name.toLowerCase()}
                    className="w-[835px] h-full object-cover"
                  />
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ThemePreview;
