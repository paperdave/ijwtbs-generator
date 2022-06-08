export function showFilePicker() {
	const input = document.createElement('input');
	input.type = 'file';
	input.accept = 'image/*';
	input.click();
	return new Promise<File>((resolve, reject) => {
		input.onchange = () => {
			if (input.files.length === 0) {
				reject();
				return;
			}
			resolve(input.files[0]);
		};
	});
}
