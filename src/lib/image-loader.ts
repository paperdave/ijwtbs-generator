const cache = new Map();

export async function loadImage(url: string): Promise<HTMLImageElement> {
  if (!cache.has(url)) {
    cache.set(url, new Promise((done) => {
      const img = new Image(); 
      img.src = url;
      img.onload = () => {
        cache.set(url, img);
        done(img);
      };
    }))
  }
  return cache.get(url);
}
