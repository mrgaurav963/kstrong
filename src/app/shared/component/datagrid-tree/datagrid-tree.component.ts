import { Component, Input } from '@angular/core';
import { TreeTableModule } from 'primeng/treetable';
import { TableData } from '../../interface/response';

@Component({
  selector: 'app-datagrid-tree',
  imports: [TreeTableModule],
  templateUrl: './datagrid-tree.component.html',
  styleUrl: './datagrid-tree.component.scss',
})
export class DatagridTreeComponent {
  @Input() tableData: TableData = {
    identifier: '',
    dataSource: [],
    config: {},
  };
  items = [
    {
      data: {
        name: 'Applications',
        size: '200mb',
        type: 'Folder',
      },
      children: [
        {
          data: {
            name: 'Angular',
            size: '25mb',
            type: 'Folder',
          },
        },
        {
          data: {
            name: 'editor.app',
            size: '25mb',
            type: 'Application',
          },
        },
        {
          data: {
            name: 'settings.app',
            size: '50mb',
            type: 'Application',
          },
        },
      ],
    },
    {
      data: {
        name: 'Cloud',
        size: '20mb',
        type: 'Folder',
      },
      children: [
        {
          data: {
            name: 'backup-1.zip',
            size: '10mb',
            type: 'Zip',
          },
        },
        {
          data: {
            name: 'backup-2.zip',
            size: '10mb',
            type: 'Zip',
          },
        },
      ],
    },
    {
      data: {
        name: 'Desktop',
        size: '150kb',
        type: 'Folder',
      },
      children: [
        {
          data: {
            name: 'note-meeting.txt',
            size: '50kb',
            type: 'Text',
          },
        },
        {
          data: {
            name: 'note-todo.txt',
            size: '100kb',
            type: 'Text',
          },
        },
      ],
    },
  ];
}
