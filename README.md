# git-sync

## 安装方法
```
npm install -g gitsynctodaily
```

## 使用场景
多人协作，需要提交到同一分支进行发布，为了防止漏发，可以动态生成个人所有本期需求汇总的中间分支

## 使用方法

在需要使用该模块的工程根目录加上一个配置文件`gitsync.conf.json`,文件内容如下：

```
{
  "name": "rwt3",
  "del": ["./build", "./src/seed.js"]
}

```

name表示个人本期分支名，del表示必然会冲突，不需要merge的文件（一b般是build文件，可以在命令执行完，结局冲突后，重新build一次）。
ps:配置文件在加入工程的同时需要加入到`.gitignore`中。

```
gitsync 1.0.0
```
第一个参数必填，是需要发布的分支的版本号

在本地`dev/需求分支`开发完以后,输入`gitsync x.x.x`,则会自动将dev/需求分支提交，并合并push到个人本期需求汇总分支，并将其与本期公用分支merge

ps:同步过程中会删除build，所以个人本期需求汇总分支是没有build目录的
