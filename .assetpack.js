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
				default: 1,
			},

			compression: {
				png: { quality: 100, compressionLevel: 0 },
				jpeg: { quality: 100, compressionLevel: 0 },
				webp: false,
			},
			texturePacker: {
				nameStyle: 'short',
				allowRotation: false,
				resolutionOptions: {
					fixedResolution: 'default',
				},
			},
			manifest: {
				output: './src/manifest.json',
			},
		}),
	],
};
