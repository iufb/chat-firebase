import { Tile, TileBackground, TileContent, TileWrapper } from "../Tile/Tile";
import {
  FeatureBackground,
  FeatureContainer,
  FeatureLeft,
  FeatureRight,
} from "./Feature";
import TextVideo from "../../assets/text1.mp4";
import LogoVideo from "../../assets/logo1.mp4";
import NotificationVideo from "../../assets/notification.webm";
import { useEffect, useState } from "react";
const aboutConst = {
  pages: [
    {
      slogans: [
        "Stay connected, always.",
        "At our chat app, we understand the importance of staying connected with your loved ones. That's why our app offers a reliable and easy way to chat with your friends and family, no matter where you are in the world.",
      ],
      video: LogoVideo,
    },
    {
      slogans: [
        "Chat anytime, anywhere.",
        "Our app is the perfect way to stay connected with your friends and family. With our easy-to-use interface, you can send messages, do videocalls  and more in just seconds.",
      ],
      video: TextVideo,
    },
    {
      slogans: [
        "Messaging made simple",
        "At our chat app, we believe that messaging should be simple and straightforward. That's why we've designed our app with an easy-to-use interface that allows you to quickly and easily send messages, do video calls.",
      ],
      video: NotificationVideo,
    },
  ],
};
const About = ({ scrollY }: { scrollY: number }) => {
  return (
    <TileWrapper numOfPages={aboutConst.pages.length} scrollY={scrollY}>
      <TileBackground>
        <FeatureBackground />
      </TileBackground>
      {aboutConst.pages.map((page, index) => (
        <TileContent key={index}>
          <Tile
            page={index}
            renderContent={({ progress }) => (
              <FeatureContainer>
                <FeatureLeft progress={progress}>
                  <h2 className="text-4xl text-center mb-4">
                    {page.slogans[0]}
                  </h2>
                  <p className="text-xl mx-5 text-center">{page.slogans[1]}</p>
                </FeatureLeft>
                <FeatureRight progress={progress}>
                  <video
                    src={page.video}
                    autoPlay
                    loop
                    className="object-cover"
                  />
                </FeatureRight>
              </FeatureContainer>
            )}
          />
        </TileContent>
      ))}
    </TileWrapper>
  );
};
export { About };
