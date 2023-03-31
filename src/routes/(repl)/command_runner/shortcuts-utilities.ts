const mod = ['Shift', 'Meta', 'Alt', 'Control', '$mod'] as const;

const keys = [
	'Backspace',
	'Tab',
	'Enter',
	'CapsLock',
	'Escape',
	'Space',
	'PageUp',
	'PageDown',
	'End',
	'Home',
	'ArrowLeft',
	'ArrowUp',
	'ArrowRight',
	'ArrowDown',
	'PrintScreen',
	'Insert',
	'Delete',
	'Digit0',
	'Digit1',
	'Digit2',
	'Digit3',
	'Digit4',
	'Digit5',
	'Digit6',
	'Digit7',
	'Digit8',
	'Digit9',
	'KeyA',
	'KeyB',
	'KeyC',
	'KeyD',
	'KeyE',
	'KeyF',
	'KeyG',
	'KeyH',
	'KeyI',
	'KeyJ',
	'KeyK',
	'KeyL',
	'KeyM',
	'KeyN',
	'KeyO',
	'KeyP',
	'KeyQ',
	'KeyR',
	'KeyS',
	'KeyT',
	'KeyU',
	'KeyV',
	'KeyW',
	'KeyX',
	'KeyY',
	'KeyZ',
	'Numpad0',
	'Numpad1',
	'Numpad2',
	'Numpad3',
	'Numpad4',
	'Numpad5',
	'Numpad6',
	'Numpad7',
	'Numpad8',
	'Numpad9',
	'NumpadMultiply',
	'NumpadAdd',
	'NumpadSubtract',
	'NumpadDecimal',
	'NumpadDivide',
	'F1',
	'F2',
	'F3',
	'F4',
	'F5',
	'F6',
	'F7',
	'F8',
	'F9',
	'F10',
	'F11',
	'F12',
	'NumLock',
	'Semicolon',
	'Equal',
	'Comma',
	'Minus',
	'Period',
	'Slash',
	'Backquote',
	'BracketLeft',
	'Backslash',
	'BracketRight',
	'Quote',
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'*',
	'+',
	'-',
	'.',
	'/',
	';',
	'=',
	',',
	'-',
	'.',
	'/',
	'`',
	'[',
	'\\',
	']',
	"'"
] as const;

type Mods = (typeof mod)[number];
type Keys = (typeof keys)[number];

export type KeyBinds = {
	mod?: Mods[];
	keys?: Keys[];
	next?: KeyBinds;
};

export function get_key_bind(key_bind: KeyBinds): string {
	return `${[...(key_bind?.mod ?? []), ...(key_bind?.keys ?? [])].join('+')}${
		key_bind.next ? ' ' + get_key_bind(key_bind.next) : ''
	}`;
}
