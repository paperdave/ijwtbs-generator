/*
  Okay so here's the deal with the IJWTBS assets:

  m is allowing me to rehost them, but doesn't want the unused ones to be available.
  **They are here though.** you just have to uncomment them below.

  My justification is: if you're going to track down the source code for this silly website,
  and getting to this point, you *probably* already mined the game yourself and already know about
  these assets. The unused assets are also on a separate cdn so this file is the ONLY place that you'll
  find the references to it.

  Now if you haven't already seen those images, I really suggest you DON'T because they're essentially
  spoilers for what else you'll find. I mean you should have already played the game before touching the
  generator at all.

  anyways whatever
  
  this file keeps all the urls to everything and is the data that is supplied to the main app.
*/

export interface LabelledImage {
	url: string;
	name: string;

	speakerName?: string;
	devName?: string;
}

export interface Character {
	name: string;
	namebox: keyof typeof nameboxes;
	sprites: LabelledImage[];
	overlays?: LabelledImage[];
}

const ROOT = 'https://media.davecode.net/other-projects/ijwtbs-generator';

export const backgrounds: LabelledImage[] = [
	{ url: ROOT + '/backgrounds/school_gate.webp', name: 'Front Gate' },
	{ url: ROOT + '/backgrounds/school_artroom.webp', name: 'Art Room' },
	{ url: ROOT + '/backgrounds/school_artroom2.webp', name: 'Art Room (Facing painting)' },
	{ url: ROOT + '/backgrounds/school_classroom.webp', name: 'Classroom' },
	{ url: ROOT + '/backgrounds/school_comic.webp', name: 'Hallway' },
	{ url: ROOT + '/backgrounds/school_courtyard.webp', name: 'Courtyard' },
	{ url: ROOT + '/backgrounds/school_gym.webp', name: 'Gym' },
	{ url: ROOT + '/backgrounds/school_hec.webp', name: 'Home Economics Room' },
	{ url: ROOT + '/backgrounds/street_night.webp', name: 'Streets at Night' }
];

export const textboxes: LabelledImage[] = [
	{ url: ROOT + '/gui/textbox narrator.webp', name: 'Narration' },
	{ url: ROOT + '/gui/textbox.webp', name: 'Aya Speaking' },
	{ url: ROOT + '/gui/textbox inner.webp', name: 'Aya Thinking' },
	{ url: ROOT + '/gui/textbox left2.webp', name: 'Left Edge' },
	{ url: ROOT + '/gui/textbox left.webp', name: 'Left' },
	{ url: ROOT + '/gui/textbox middle.webp', name: 'Middle' },
	{ url: ROOT + '/gui/textbox right.webp', name: 'Right' },
	{ url: ROOT + '/gui/textbox right2.webp', name: 'Right Edge' }
];

export const nameboxes = {
	white: ROOT + '/gui/namebox.webp',
	blue: ROOT + '/gui/namebox_blue.webp',
	green: ROOT + '/gui/namebox_green.webp',
	orange: ROOT + '/gui/namebox_orange.webp',
	purple: ROOT + '/gui/namebox_purple.webp',
	red: ROOT + '/gui/namebox_red.webp'
};

export const lovebars = {
	'Random Girl': {
		bar: ROOT + '/gui/random_full_bar.webp',
		heart: ROOT + '/gui/random_heart.webp'
	},
	Akane: {
		bar: ROOT + '/gui/red_full_bar.webp',
		heart: ROOT + '/gui/red_heart.webp'
	},
	Kaede: {
		bar: ROOT + '/gui/orange_full_bar.webp',
		heart: ROOT + '/gui/orange_heart.webp'
	},
	Katsumi: {
		bar: ROOT + '/gui/blue_full_bar.webp',
		heart: ROOT + '/gui/blue_heart.webp'
	},
	Nozomin: {
		bar: ROOT + '/gui/purple_full_bar.webp',
		heart: ROOT + '/gui/purple_heart.webp'
	},
	Shizuka: {
		bar: ROOT + '/gui/green_full_bar.webp',
		heart: ROOT + '/gui/green_heart.webp'
	}
};

export const WORDBUBBLE = ROOT + '/gui/wordbubble.webp';
export const GUI_SETTINGS = ROOT + '/gui/settings.webp';
export const GUI_SAVE = ROOT + '/gui/save.webp';
export const GUI_LOAD = ROOT + '/gui/load.webp';
export const GUI_HISTORY = ROOT + '/gui/history.webp';
export const LOVE_BAR_BG = ROOT + '/gui/love_bar.webp';
export const LOVE_BAR_BROKEN_HEART = ROOT + '/gui/broken_heart.webp';
export const LOVE_BAR_EMPTY = ROOT + '/gui/empty_bar.webp';

export const characters: Character[] = [
	{
		name: 'Aya',
		namebox: 'white',
		sprites: [
			{ url: ROOT + '/characters/aya/default.webp', name: 'default' },
			{ url: ROOT + '/characters/aya/brace.webp', name: 'brace' },
			{ url: ROOT + '/characters/aya/ehe.webp', name: 'ehe' },
			{ url: ROOT + '/characters/aya/handup.webp', name: 'handup' },
			{ url: ROOT + '/characters/aya/oh.webp', name: 'oh' },
			{ url: ROOT + '/characters/aya/ohno.webp', name: 'ohno' },
			{ url: ROOT + '/characters/aya/oops.webp', name: 'oops' },
			{ url: ROOT + '/characters/aya/side.webp', name: 'side' },
			{ url: ROOT + '/characters/aya/surprised.webp', name: 'surprised' },
			{ url: ROOT + '/characters/aya/unimpressed.webp', name: 'unimpressed' },
			{ url: ROOT + '/characters/aya/unsure.webp', name: 'unsure' }
		]
	},
	{
		name: 'Akane',
		namebox: 'red',
		sprites: [
			{ url: ROOT + '/characters/akane/red default.webp', name: 'Default' },
			// { url: ROOT + '/characters/akane/red ha.webp', name: 'Alternate' },
			// { url: ROOT + '/characters/akane/red front.webp', name: 'Front' },
			// { url: ROOT + '/characters/akane/red back.webp', name: 'Back' },
			// { url: ROOT + '/characters/akane/red angry.webp', name: 'Angry' },
			// { url: ROOT + '/characters/akane/red point.webp', name: 'Pointing' },
			// { url: ROOT + '/characters/akane/red point angry.webp', name: 'Pointing Angry' },
			// { url: ROOT + '/characters/akane/red point happy.webp', name: 'Pointing Happy' },
			// { url: ROOT + '/characters/akane/red depressed.webp', name: 'Depressed' },
			// { url: ROOT + '/characters/akane/red shock.webp', name: 'Shocked' },
			// { url: ROOT + '/characters/akane/red shy.webp', name: 'Shy' },
			// { url: ROOT + '/characters/akane/red smile.webp', name: 'Smiling' },
			// { url: ROOT + '/characters/akane/red think.webp', name: 'Thinking' },
			{ url: ROOT + '/characters/akane/gym.webp', name: 'Gym Default' },
			{ url: ROOT + '/characters/akane/gym ha.webp', name: 'Gym Alternate' },
			{ url: ROOT + '/characters/akane/gym back.webp', name: 'Gym Back' },
			{ url: ROOT + '/characters/akane/gym depressed.webp', name: 'Gym depressed' },
			{ url: ROOT + '/characters/akane/gym point.webp', name: 'Gym Point' },
			{ url: ROOT + '/characters/akane/gym point angry.webp', name: 'Gym Point Angry' },
			{ url: ROOT + '/characters/akane/gym point happy.webp', name: 'Gym Point Happy' },
			{ url: ROOT + '/characters/akane/silhouette.webp', name: 'Silhouette' }
		]
	},
	{
		name: 'Kaede',
		namebox: 'orange',
		sprites: [
			{ url: ROOT + '/characters/kaede/orange default.webp', name: 'Default', devName: 'normal' },
			{ url: ROOT + '/characters/kaede/orange side.webp', name: 'Alternate' },
			{ url: ROOT + '/characters/kaede/orange happy.webp', name: 'Happy' },
			{ url: ROOT + '/characters/kaede/orange book.webp', name: 'Reading', devName: 'book' },
			{ url: ROOT + '/characters/kaede/orange ehe.webp', name: 'Laugh', devName: 'ehe' },
			// { url: ROOT + '/characters/kaede/orange evil.webp', name: 'Evil', devName: 'evil' },
			{ url: ROOT + '/characters/kaede/orange hm.webp', name: 'Thinking' },
			{ url: ROOT + '/characters/kaede/orange sad.webp', name: 'Sad', devName: 'sad' },
			{ url: ROOT + '/characters/kaede/orange shocked.webp', name: 'Shocked', devName: 'shocked' },
			{ url: ROOT + '/characters/kaede/orange shy.webp', name: 'Shy' },
			{ url: ROOT + '/characters/kaede/orange shy2.webp', name: 'Embarrassed' },
			{ url: ROOT + '/characters/kaede/orange think2.webp', name: 'Thinking' },
			{ url: ROOT + '/characters/kaede/orange think.webp', name: 'No Eyes Thinking' },
			{ url: ROOT + '/characters/kaede/orange back.webp', name: 'Back', devName: 'back' },
			{ url: ROOT + '/characters/kaede/silhouette.webp', name: 'Silhouette' }
		]
	},
	{
		name: 'Katsumi',
		namebox: 'blue',
		sprites: [
			{ url: ROOT + '/characters/katsumi/blue default.webp', name: 'Default' },
			// { url: ROOT + '/characters/katsumi/blue ha.webp', name: 'Alternate' },
			// { url: ROOT + '/characters/katsumi/blue back.webp', name: 'Back' },
			// { url: ROOT + '/characters/katsumi/blue happy.webp', name: 'Happy' },
			// { url: ROOT + '/characters/katsumi/blue cringe.webp', name: 'Cringe' },
			// { url: ROOT + '/characters/katsumi/blue mad.webp', name: 'Mad' },
			// { url: ROOT + '/characters/katsumi/blue angry yan.webp', name: 'Angry' },
			// { url: ROOT + '/characters/katsumi/blue angry.webp', name: 'Very Angry' },
			// { url: ROOT + '/characters/katsumi/blue cute.webp', name: 'Cute' },
			// { url: ROOT + '/characters/katsumi/blue cute yan.webp', name: 'Cute Yandere' },
			// { url: ROOT + '/characters/katsumi/blue depressed.webp', name: 'Depressed' },
			// { url: ROOT + '/characters/katsumi/blue scared.webp', name: 'Scared' },
			// { url: ROOT + '/characters/katsumi/blue shocked.webp', name: 'Shocked' },
			// { url: ROOT + '/characters/katsumi/blue side.webp', name: 'Smile' },
			// { url: ROOT + '/characters/katsumi/blue smug.webp', name: 'Smug' },
			// { url: ROOT + '/characters/katsumi/blue think.webp', name: 'Thinking' },
			// { url: ROOT + '/characters/katsumi/blue yan.webp', name: 'Yandere\'s Fear' },
			{ url: ROOT + '/characters/katsumi/blue yandere1.webp', name: 'Yandere' },
			// { url: ROOT + '/characters/katsumi/blue yandere2.webp', name: 'Yandere Alternate' },

			{ url: ROOT + '/characters/katsumi/apron1.webp', name: 'Apron' },
			{ url: ROOT + '/characters/katsumi/apron ha.webp', name: 'Apron Alternate' },
			// { url: ROOT + '/characters/katsumi/apron back.webp', name: 'Back' },
			{ url: ROOT + '/characters/katsumi/apron happy.webp', name: 'Apron Happy' },
			{ url: ROOT + '/characters/katsumi/apron mad.webp', name: 'Apron Mad' },
			{ url: ROOT + '/characters/katsumi/apron cringe.webp', name: 'Apron Cringe' },
			{ url: ROOT + '/characters/katsumi/apron depressed.webp', name: 'Apron Depressed' },
			{ url: ROOT + '/characters/katsumi/apron smug.webp', name: 'Apron Smug' },
			{ url: ROOT + '/characters/katsumi/apron think.webp', name: 'Apron Thinking' },
			{ url: ROOT + '/characters/katsumi/apron2.webp', name: 'Apron Yandere' },
			{ url: ROOT + '/characters/katsumi/apron knife.webp', name: 'Apron Yandere Knife' },
			{
				url: ROOT + '/characters/katsumi/apron knife2.webp',
				name: 'Apron Yandere Knife Alternate'
			},
			// { url: ROOT + '/characters/katsumi/apron yan.webp', name: 'Apron Yandere\'s Fear' },
			{ url: ROOT + '/characters/katsumi/apron_yandere.webp', name: 'Apron Death Glare' },
			{ url: ROOT + '/characters/katsumi/silhouette.webp', name: 'Silhouette' }
		],
		overlays: [
			{ url: ROOT + '/characters/katsumi/blood.webp', name: 'Blood Overlay' },
			{ url: ROOT + '/characters/katsumi/blood2.webp', name: 'Blood Overlay 2' }
		]
	},
	{
		name: 'Nozomin',
		namebox: 'purple',
		sprites: [
			{ url: ROOT + '/characters/nozomin/purple default.webp', name: 'Normal' },
			{ url: ROOT + '/characters/nozomin/purple back.webp', name: 'Back' },
			{ url: ROOT + '/characters/nozomin/purple back2.webp', name: '天' },
			{ url: ROOT + '/characters/nozomin/purple mad.webp', name: 'Mad' },
			{ url: ROOT + '/characters/nozomin/purple jojo.webp', name: 'JoJo Pose #1' },
			{ url: ROOT + '/characters/nozomin/purple jojo1.webp', name: 'JoJo Pose #2' },
			{ url: ROOT + '/characters/nozomin/purple jojo2.webp', name: 'JoJo Pose #3' },
			{ url: ROOT + '/characters/nozomin/purple pog.webp', name: 'Poggers' },
			{ url: ROOT + '/characters/nozomin/purple pout.webp', name: 'Pouting' },
			{ url: ROOT + '/characters/nozomin/purple shocked.webp', name: 'Shocked' },
			{ url: ROOT + '/characters/nozomin/purple shy.webp', name: 'Shy' },
			{ url: ROOT + '/characters/nozomin/purple uwu.webp', name: 'UwU Face' },
			{ url: ROOT + '/characters/nozomin/silhouette.webp', name: 'Silhouette' }
		]
	},
	{
		name: 'Shizuka',
		namebox: 'green',
		sprites: [
			{ url: ROOT + '/characters/shizuka/green default.webp', name: 'Default', devName: 'normal' },
			// { url: ROOT + '/characters/shizuka/green front.webp', name: 'Shy', devName: 'shy' },
			{
				url: ROOT + '/characters/shizuka/green tilt right.webp',
				name: 'Tilting Head',
				devName: 'tiltright'
			},
			// { url: ROOT + '/characters/shizuka/green tilt left.webp', name: 'Shy Tilting Head', devName: 'tiltleft' },
			// { url: ROOT + '/characters/shizuka/green peace.webp', name: 'Peace Sign', devName: 'peace' },
			// { url: ROOT + '/characters/shizuka/green back.webp', name: 'Back', devName: 'back' },
			{ url: ROOT + '/characters/shizuka/green paint.webp', name: 'Painting', devName: 'paint' },
			{ url: ROOT + '/characters/shizuka/green think.webp', name: 'Thinking', devName: 'think' },
			{ url: ROOT + '/characters/shizuka/silhouette.webp', name: 'Silhouette', devName: 'sg' }
		]
	},
	{
		name: 'Random Girl',
		namebox: 'white',
		sprites: [
			{
				url: ROOT + '/characters/random-girl/random girl.webp',
				name: 'Default',
				devName: 'pnormal'
			},
			{
				url: ROOT + '/characters/random-girl/random girl angry.webp',
				name: 'Angry (with mark)',
				devName: 'angy'
			},
			{
				url: ROOT + '/characters/random-girl/random girl angry1.webp',
				name: 'Angry',
				devName: 'angy1'
			},
			{
				url: ROOT + '/characters/random-girl/random girl surprise.webp',
				name: 'Surprised (with mark)',
				devName: 'surprise'
			},
			{
				url: ROOT + '/characters/random-girl/random girl surprise1.webp',
				name: 'Surprised',
				devName: 'surprise1'
			},
			{
				url: ROOT + '/characters/random-girl/random girl wat.webp',
				name: 'Shocked',
				devName: 'wat'
			}
		]
	},
	{
		name: 'Teacher',
		namebox: 'white',
		sprites: [
			{ url: ROOT + '/characters/teacher/teacher.webp', name: 'Default', devName: 'normal' },
			{ url: ROOT + '/characters/teacher/teacher1.webp', name: 'Hand Outwards', devName: '1' },
			{ url: ROOT + '/characters/teacher/teacher2.webp', name: 'Hand on Head', devName: '2' }
		]
	},
	{
		name: 'Classmate',
		namebox: 'white',
		sprites: [
			{
				url: ROOT + '/characters/silhouette/bun.webp',
				name: 'Classmate 1 "Bun"',
				speakerName: 'Classmate 1',
				devName: 'rc1'
			},
			{
				url: ROOT + '/characters/silhouette/trash.webp',
				name: 'Classmate 2 "Trash"',
				speakerName: 'Classmate 2',
				devName: 'rc2'
			},
			{
				url: ROOT + '/characters/silhouette/gyaru.webp',
				name: 'Classmate 3 "Gyaru"',
				speakerName: 'Classmate 3',
				devName: 'rc3'
			},
			{
				url: ROOT + '/characters/silhouette/lily.webp',
				name: 'Classmate 4 "Lily"',
				speakerName: 'Classmate 4',
				devName: 'rc4'
			},
			{
				url: ROOT + '/characters/silhouette/fluffy.webp',
				name: 'Classmate 5 "Fluffy"',
				speakerName: 'Classmate 5',
				devName: 'rc5'
			}
		]
	}
];
