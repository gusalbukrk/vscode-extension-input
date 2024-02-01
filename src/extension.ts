import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "extension" is now active!');

	context.subscriptions.push(vscode.commands.registerCommand('extension.helloWorld', async () => {
		vscode.window.showInformationMessage('Hello world!');

		// // `window.showQuickPick` is easier but `window.createQuickPick` is more flexible
		// const a = await vscode.window.showQuickPick(
		// 	['one', 'two', 'three'],
		// 	{ // https://code.visualstudio.com/api/references/vscode-api#QuickPickOptions
		// 		canPickMany: true,
		// 		title: 'My QuickPick Title',
		// 		placeHolder: 'My QuickPick PlaceHolder',
		// 		// ignoreFocusOut: true, // keep the picker open when focus moves to another part of the editor or to another window

		// 		// invoked whenever an item is highlighted
		// 		// onDidSelectItem: item => console.log(item + ' was selected'),
		// 	}
		// );
		// console.log(a);

		// const b = await vscode.window.showQuickPick([
		// 	{ label: 'one', description: 'description 1' },
		// 	{ label: 'two', description: 'description 2' },
		// 	{ label: 'three', description: 'description 3' },
		// ], {
		// 	matchOnDescription: true, // include the description when filtering the picks
		// });
		// console.log(b);

		// // `createQuickPick` returns a `QuickPick` object
		// // https://code.visualstudio.com/api/references/vscode-api#QuickPick&lt;T&gt;
		// const qp = vscode.window.createQuickPick();
		// qp.onDidHide(() => qp.dispose());
		// qp.title = 'My QuickPick Title';
		// qp.placeholder = 'My QuickPick PlaceHolder';
		// // qp.canSelectMany = true;
		// qp.items = [ { label: 'foo' }, { label: 'bar' }, { label: 'baz' } ];
		// qp.onDidAccept( () => {
		// 	// triggered when `Enter` is pressed; when canSelectMany is false,
		// 	// `onDidChangeSelection` can be used for the same purpose
		// 	console.log('accepted');
		// 	console.log(qp.selectedItems);
		// 	qp.hide();
		// });
		// qp.show();

		// // `window.showInputBox` is easier but `window.createInputBox` is more flexible
		// const x = await vscode.window.showInputBox({
		// 	title: 'Input box title',
		// 	prompt: 'Input box prompt',
		// 	placeHolder: 'Input box placeHolder',
			
		// 	// value: 'mydefaultvalue',
		// 	// valueSelection: [2, 9], // select a range of text in the input box

		// 	// ignoreFocusOut: true,
		// 	// password: true, // show password input (i.e. hide the input)
			
		// 	// must return either:
		// 	// - human-readable string which is presented as an error message or an InputBoxValidationMessage
		// 	// - undefined or null to indicate that the value is valid
		// 	validateInput: (input) => { // runs at every keystroke
		// 		console.log('validating...');
		// 		return /^\w+$/.test(input) ? null : 'Not a valid input';
		// 	},
		// });
		// console.log(x);

		const ib = vscode.window.createInputBox();
		ib.onDidHide(() => ib.dispose());
		ib.title = "My InputBox Title";
		// ib.step = 1; // this number is shown between parentheses after title
		// ib.totalSteps = 1; // this number is shown together with step;
		ib.show();
		ib.onDidAccept( async () => {
			ib.busy = true; // show a progress indicator
			ib.enabled = false;
			await delay(10000);
			ib.busy = false;

			console.log(ib.value);

			ib.hide();
		});

		// // on Windows & Linux, a file dialog cannot be both a file selector and a folder selector
		// const uris = await vscode.window.showOpenDialog({
		// 	// https://code.visualstudio.com/api/references/vscode-api#OpenDialogOptions

		// 	// canSelectFolders: true,
		// 	// canSelectFiles: true, // already default
		// 	canSelectMany: true,
		// 	openLabel: 'Select folder',
		// 	title: "My Dialog Title",
		// 	// defaultUri: vscode.Uri.file('home/user/Downloads/'),

		// 	// limit the file types that can be selected
		// 	// filters: {
		// 	// 	"Images": ["png", "jpg", "jpeg"],
		// 	// 	"TypeScript": ["ts", "tsx"],
		// 	// 	// "Allowed filetypes": ["png", "jpg", "jpeg", "ts", "tsx"],
		// 	// },
		// });

		// console.log(uris);
	}));
}

function delay(ms: number): Promise<void> {
	return new Promise((res, rej) => setTimeout(res, ms));
}

export function deactivate() {}
