import {NgDocPage} from '@ng-doc/core';
import {MyDemoComponent} from "./my-demo/my-demo.component";

const MyPagePage: NgDocPage = {
	title: `MyPage`,
	mdFile: './index.md',
  demos: {MyDemoComponent},
};

export default MyPagePage;
