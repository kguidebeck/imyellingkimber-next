export const IMAGE_PROJECTION = (wrapperName: string) => `
  "${wrapperName}": ${wrapperName}.imageData {
    alt,
    asset->{
      _type,
      _id,
      url,
      metadata {
        "width": dimensions.width,
        "aspectRatio": dimensions.aspectRatio,
        "height": dimensions.height,
      },
    },
    crop,
    hotspot,
  }`;
