'use babel';


import { CompositeDisposable } from 'atom';

export default {

  dogeImgView: null,
  modalPanel: null,
  subscriptions: null,
  valid: false,

  such_wow() {
    //console.log('DogeImg was toggled!');
    //var editor = atom.workspace.getActiveTextEditor();
    //editor.insertText('test');
  },

  activate(state) {

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'doge-img:such wow': () => this.such_wow()
    }));

    atom.workspace.observeTextEditors(function(editor) {
      return editor.observeCursors(function(cursor) {
        return cursor.onDidChangePosition(function(event) {
          this.valid = true;
          if (event.cursor.isInsideWord({
            wordRegex: "WoW"
          }) && this.valid == true) {
            var editor = atom.workspace.getActiveTextEditor();
            editor.insertText('<img src="https://memecrunch.com/meme/1CFKM/such-wow/image.jpg"></img>');
            this.vaild = false;

          }
        });
      });
    });

  },

  deactivate() {
    this.subscriptions.dispose();
  }



};
