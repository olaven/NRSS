import { SearchResult } from "../lib/nrk.ts"
import CopyButton from "../islands/CopyButton.tsx";

export function SerieCard(props: { serie: SearchResult, origin: string }) {
    const feedUrl = new URL(`/api/feeds/${props.serie.seriesId}`, props.origin);
    const image = props.serie.images[0];
    return (
        <div className="border-2 my-2 p-2">
            <div className="mx-auto h-full w-full">
                <h2 className="text-xl">{props.serie.title}</h2>
                <p className="text-md">{props.serie.description}</p>
                <img src={image.uri} width={image.width} />
                <CopyButton text={feedUrl.toString()}>
                    Kopier URL
                </CopyButton>
            </div>
        </div >
    );
}
