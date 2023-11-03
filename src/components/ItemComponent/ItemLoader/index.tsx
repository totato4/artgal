import ContentLoader from 'react-content-loader';

// export const ItemLoader = () => (
//   <ContentLoader
//     speed={2}
//     max-width={360}
//     max-height={275}
//     viewBox="0 0 360 275"
//     backgroundColor="rgba(0,0,0,0.30)"
//     foregroundColor="#a4a4a4"
//   >
//     <rect x="0" y="0" rx="8" ry="8" width="360" height="275" />
//   </ContentLoader>
// );

export const ThreeDots = () => (
  <ContentLoader
    viewBox="0 0 400 160"
    height={160}
    width={400}
    backgroundColor="transparent"
  >
    <circle cx="150" cy="86" r="8" />
    <circle cx="194" cy="86" r="8" />
    <circle cx="238" cy="86" r="8" />
  </ContentLoader>
);
