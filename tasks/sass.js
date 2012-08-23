module.exports = function(grunt){

  // ログ用
  var log = grunt.log;

  // node.jsでコンソールコマンドを実行するためのモジュール
  var proc = require('child_process');

  // タスク（マルチタスクとして）を登録
  grunt.registerMultiTask('sass', 'sass compile', function() {

    // 非同期タスクであることを示す
    var done = this.async();

    // 読み込み元
    var src = this.file.src;

    // 出力先
    var dest = this.file.dest;

    // scssからcssに変換するコマンド
    var command = 'sass ' + src + ':' + dest;

    // コンソールコマンドを実行
    var out = proc.exec(command, function(error, stdout, stderr){

      // エラー時
      if(error || stderr){
        log.writeln('File "' + dest + '" failed.');
        done(false);
      // 成功時
      }else{
        log.writeln('File "' + dest + '" created.');
        done(true);
      }
    });
  });

};