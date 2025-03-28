import { pixiPipes } from '@assetpack/core/pixi';
import { audio } from '@assetpack/core/ffmpeg';

export default {
	entry: './raw-assets',
	output: './public/assets',
	pipes: [

		...pixiPipes({
			cacheBust: true,
			audio: audio(),
			resolutions: {
				default: 0.5,
			},
			manifest: {
				output: './src/manifest.json',
			},
		}),
	],
};
