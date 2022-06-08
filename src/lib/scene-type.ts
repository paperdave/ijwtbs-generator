import type { nameboxes } from './assets';

export interface Scene {
	background_visible: boolean;
	background: string;
	background_custom?: string; // this is a display name for the thrown together custom bg system

	background_offset_x: number;
	background_offset_y: number;
	background_scale: number;

	aya_visible: boolean;
	aya_image: string;

	textbox_visible: boolean;
	textbox_image: string;
	textbox_text: string;

	namebox_color: keyof typeof nameboxes | 'Narration';
	namebox_custom_color: string;
	namebox_text: string;

	characters: SceneCharacter[];

	objective: string;

	lovebar_visible: boolean;
	lovebar_color: string;
	lovebar_amount: number;

	gui_elements_visible: boolean;
}

export interface SceneCharacter {
	is_custom?: boolean;
	character: string;
	visible: boolean;
	image: string;
	image_offset_x: number;
	image_offset_y: number;
	image_offset_scale: number;
}
