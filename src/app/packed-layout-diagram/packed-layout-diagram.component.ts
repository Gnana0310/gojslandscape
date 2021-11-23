import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectorRef,
  Component,
  Input,
  Renderer2,
  ViewChild,
  OnInit
} from '@angular/core';
/* initial called import */
/* import * as go from 'gojs';
 import { DataSyncService, DiagramComponent } from 'gojs-angular';
 import { PackedLayout } from 'gojs/extensionsTS/PackedLayout'; */

/* added for testing[23-11-2021] 
 directly refered from node_modules extensionsJSM folder for packedLayout */
import * as go from '../../../node_modules/gojs/release/go-module';
import { DataSyncService, DiagramComponent } from 'gojs-angular';
/* import { PackedLayout } from '../../../node_modules/gojs/extensionsJSM/PackedLayout';*/

/* added for testing[23-11-2021] 
 local import and refered */
import { PackedLayout } from '../go-depandancy/PackedLayout';

@Component({
  selector: 'app-packed-layout-diagram',
  templateUrl: './packed-layout-diagram.component.html',
  styleUrls: ['./packed-layout-diagram.component.css']
})
export class PackedLayoutDiagramComponent implements OnInit {

  @ViewChild('myDiagram', { static: true })
  public myDiagramComponent: DiagramComponent | undefined;
  @Input() diagramModelDataInput: go.ObjectData | undefined;
  @Input() diagramNodeDataInput: Array<go.ObjectData> | undefined;
  showLegends = false;
  legendsDisplayed = false;
  @Input() legends: any;
  diagramLinkData: go.ObjectData[] | undefined |any;

  // initialize diagram / templates
  public initDiagram() {
    let isGridLayout=false;
    const $ = go.GraphObject.make;
    let strokeWidth = 1;
    const isSubGraphExpanded = true;
    const textBlockHeight = 35;
    const shapeKeyword = 'SHAPE';
    const textKeyword = 'TEXT';

    const dia = $(go.Diagram, {
      'undoManager.isEnabled': true,
      'draggingTool.isEnabled': false,
      contentAlignment: go.Spot.TopLeft, // to align the content on top left/center
      initialAutoScale: go.Diagram.UniformToFill, // fit to window - go.Diagram.Uniform, //fit to rect - UniformToFill
      model: $(go.GraphLinksModel,
        {
          linkToPortIdProperty: 'toPort',
          linkFromPortIdProperty: 'fromPort',
          linkKeyProperty: 'key' // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
        }
      )
    });

    dia.commandHandler.archetypeGroupData = { key: 'Group', isGroup: true };

    function makeLayout(parentGroupItem: boolean) {  // a Binding conversion function
      return $(PackedLayout,
        {
          // packMode: PackedLayout.AspectOnly,
          // packShape: PackedLayout.Rectangular,
          // sortMode: PackedLayout.Area,
          // sortOrder: PackedLayout.Ascending,
          aspectRatio: 2,
          size: new go.Size(10, 10),
          spacing: 10,
          hasCircularNodes: false,
          arrangesToOrigin: true
        }
      );
    }


    dia.toolManager.hoverDelay = 100;
    dia.defaultCursor = 'pointer';

    function viewDetail(e: any, obj: { part: { adornedPart: { data: { text: any; }; }; }; }) {

      alert(obj.part.adornedPart.data.text);
    }

    function mouseEntergrp(e: any, obj: { data: { key: go.Key; group: go.Key; }; }) {
      if (dia.model.modelData.levelHoverEnabled) {
        dia.nodes.each(n => n.opacity = ((n.key === obj.data.key) || obj.data.key === n.data.group || obj.data.group === n.key) ? 1.0 : 0.2);
      }
    }


    function mouseLeavegrp(e: any, obj: any) {
      dia.nodes.each(n => n.opacity = 1.0);
    }

    function mouseEnter(e: any, obj: { data: { key: go.Key; group: go.Key; }; }) {
      if (dia.model.modelData.nodeHoverEnabled) {
        dia.nodes.each(n => n.opacity = ((n.key === obj.data.key) || n.key === obj.data.group) ? 1.0 : 0.2);
      }
    }

    function mouseLeave(e: any, obj: any) {
      dia.nodes.each(n => n.opacity = 1.0);
    }
    let enabledWidth = false;
    setTimeout(() => {
      enabledWidth = dia.model.modelData.widthEnabled;
    }, 100);
    setTimeout(() => {
    dia.groupTemplate =
    //////// start - here
    // $(go.Group, go.Panel.Auto,
    //      {
    //        background: "transparent",
    //        ungroupable: true,
    //        // highlight when dragging into the Group
    //        computesBoundsAfterDrag: true,
    //        // when the selection is dropped into a Group, add the selected Parts into that Group;
    //        // if it fails, cancel the tool, rolling back any changes
    //        handlesDragDropForMembers: true,  // don't need to define handlers on member Nodes and Links
    //        layoutConditions: go.Part.LayoutStandard & ~go.Part.LayoutGroupLayout,
    //        layout:
    //         $(PackedLayout,
    //           { spacing: 10 })
    //      },
    //      new go.Binding("background", "isHighlighted", h => h ? "rgba(255,0,0,0.2)" : "transparent").ofObject(),
    //      $(go.Shape, "Rectangle",
    //        { fill: null, stroke: "#0099CC", strokeWidth: 2 }),
    //      $(go.Panel, go.Panel.Vertical,  // title above Placeholder
    //        $(go.Panel, go.Panel.Horizontal,  // button next to TextBlock
    //          { name: "HEADER" },
    //          { stretch: go.GraphObject.Horizontal, background: "#33D3E5", margin: 1 },
    //          $("SubGraphExpanderButton",
    //            { alignment: go.Spot.Right, margin: 5 }),
    //          $(go.TextBlock,
    //            {
    //              alignment: go.Spot.Left,
    //              editable: true,
    //              margin: 5,
    //              font: "bold 18px sans-serif",
    //              stroke: "#006080"
    //            },
    //            new go.Binding("text").makeTwoWay())
    //        ),  // end Horizontal Panel
    //        $(go.Placeholder,
    //          { padding: 5, alignment: go.Spot.TopLeft })
    //      )  // end Vertical Panel
    //     );  // end Group and call to add to template Map

        // ------------------- exace sample from gojs end--------------------
    
    $(go.Group, 'Auto',
      {
        mouseLeave: mouseLeavegrp,
        background: 'transparent',
        ungroupable: true,
        isSubGraphExpanded: isSubGraphExpanded,
        //layoutConditions: go.Part.LayoutStandard & ~go.Part.LayoutGroupLayout,
        layout: $(PackedLayout,
              { spacing: 10 })
      },
      new go.Binding('layout', 'parentGroupItem', makeLayout),

      dia.model.modelData.width > 0 ? new go.Binding('width', 'parentGroupItem', function (g) { return g ? dia.model.modelData.width : (dia.model.modelData.width / dia.model.modelData.level1wrappingColumnCount) - 20; }) : '',

      new go.Binding('background', 'isHighlighted', function (h) {
        return h ? 'rgba(255,0,0,0.2)' : 'transparent';
      }).ofObject(),
      $(go.Shape, 'Rectangle',
        { parameter1: 14, fill: '#fff', strokeWidth: strokeWidth, name: shapeKeyword },
        new go.Binding('strokeWidth', 'parentGroupItem', function (parentGroupItem) { return parentGroupItem ? dia.model.modelData.strokeWidth : dia.model.modelData.strokeWidth; }),

        // node/group fill color
        new go.Binding('fill', 'parentGroupItem', function (parentGroupItem, obj) {
          return obj.part.data.fillColor ? obj.part.data.fillColor : ((parentGroupItem) ? dia.model.modelData.groupFillColor : dia.model.modelData.childGroupFillColor);
        }),
        // node/group box border color
        new go.Binding('stroke', 'parentGroupItem', function (parentGroupItem, obj) {
          return obj.part.data.color ? obj.part.data.color : ((parentGroupItem) ? dia.model.modelData.groupColor : dia.model.modelData.childGroupCOlor);
        }),
      ),
      $(go.Panel, 'Vertical',  // title above Placeholder
        { stretch: go.GraphObject.Horizontal },
        $(go.Panel, 'Table',  // button next to TextBlock Horizontal or Table
          { stretch: go.GraphObject.Horizontal, height: 50 },
          new go.Binding('height', 'parentGroupItem', function (parentGroupItem, obj) {
            return obj.part.data.height; // height configured from the data level itself
          }),
          new go.Binding('background', 'parentGroupItem', function (parentGroupItem, obj) {
              return obj.part.data.color ? obj.part.data.color : ((parentGroupItem) ? dia.model.modelData.groupColor : dia.model.modelData.childGroupCOlor);
          }),
          $('SubGraphExpanderButton',
            { alignment: go.Spot.Left, margin: 5 }),
          $(go.TextBlock,
            {
              // verticalAlignment: go.Spot.Center,
              editable: false,
              margin: new go.Margin(15, 5, 0, 30),
              font: '18px sans-serif',
              stroke: 'white',
              name: textKeyword,
              columnSpan: 4,
              height: textBlockHeight,
              overflow: go.TextBlock.OverflowEllipsis,
              textAlign: 'left', // 'start' | 'end' | 'left' | 'right' | 'center',
              alignment: go.Spot.Center
            },
            new go.Binding('font', 'parentGroupItem', function (parentGroupItem) { return parentGroupItem ? dia.model.modelData.parentGroupFont : dia.model.modelData.childrenGroupFont; }),
            new go.Binding('stroke', 'parentGroupItem', function (parentGroupItem) { return parentGroupItem ? dia.model.modelData.parentGroupTextColor : dia.model.modelData.childrenGroupTextColor; }),
            new go.Binding('text', 'text').makeTwoWay()),
          {
            toolTip:  // define a tooltip for each node that displays the color as text
              $('ToolTip',
                $(go.TextBlock, { margin: 4 },
                  new go.Binding('text', 'text'))
              )  // end of Adornment
          }
        ),  // end Horizontal Panel
        $(go.Placeholder,
          { padding: 10, alignment: go.Spot.Center },
        )
      )  // end Vertical Panel
      );
    }, 200);
    let myLastClick = 0;
    // define the Node template
    dia.nodeTemplate =

      $(go.Node, 'Auto',
      {
        desiredSize: new go.Size(140, 70), // To set the size of node (150,70)
        mouseLeave: mouseLeave,
      },

      $(go.Shape, 'RoundedRectangle',
        { fill: '#fff', strokeWidth: strokeWidth, name: 'SHAPE' },
        new go.Binding('stroke', 'color', function (color, obj) { return obj.part.data.color  ? obj.part.data.color : dia.model.modelData.nodeColor; }),
        new go.Binding('fill', 'color', function (color, obj) { return obj.part.data.fillColor ? obj.part.data.fillColor : dia.model.modelData.nodeFillColor; }),
      ),

      $(go.TextBlock,
        {
          margin: 5,
          font: '16px sans-serif',
          stroke: 'white',
          name: textKeyword,
          alignment: go.Spot.Center,
          overflow: go.TextBlock.OverflowEllipsis,
          text: 'alignment: Center',
        },

        new go.Binding('stroke', 'color', function (color, obj) { return obj.part.data.textColor ? obj.part.data.textColor : dia.model.modelData.nodeTextColor ? dia.model.modelData.nodeTextColor : 'white'; }),
        new go.Binding('font', 'text', function (text) { return dia.model.modelData.nodeTextFont ? dia.model.modelData.nodeTextFont : '16px sans-serif'; }),
        new go.Binding('text', 'text').makeTwoWay()),
      //{
      //  contextMenu:     // define a context menu for each node
      //    $('ContextMenu',  // that has one button
      //      $('ContextMenuButton',
      //        $(go.TextBlock, 'View Detail'),
      //        { click: viewDetail })
      //      // more ContextMenuButtons would go here
      //    )  // end Adornment
      //},
      {
        toolTip:  // define a tooltip for each node that displays the color as text
          $('ToolTip',
            $(go.TextBlock, { margin: 4 },
              new go.Binding('text', 'text'))
          )  // end of Adornment
        }
      );

      dia.nodeTemplate.contextMenu =
      $<go.Adornment>('ContextMenu',
      $<go.Panel>('ContextMenuButton',
            $(go.TextBlock, 'View Detail'),
            // { click:viewDetail })
      )
      );

    return dia;
  }

  public diagramNodeData: Array<go.ObjectData> = [];
  public diagramDivClassName = 'myDiagramDiv';
  public skipsDiagramUpdate = false;

  public diagramModelData: go.ObjectData = {};

  // When the diagram model changes, update app data to reflect those changes
  public diagramModelChange = function (this: PackedLayoutDiagramComponent, changes: go.IncrementalData) {
    // when setting state here, be sure to set skipsDiagramUpdate: true since GoJS already has this update
    // (since this is a GoJS model changed listener event function)
    // this way, we don't log an unneeded transaction in the Diagram's undoManager history
    this.skipsDiagramUpdate = true;
    this.diagramNodeData = DataSyncService.syncNodeData(changes, this.diagramNodeData);
    this.diagramLinkData = DataSyncService.syncLinkData(changes, this.diagramLinkData);
    this.diagramModelData = DataSyncService.syncModelData(changes, this.diagramModelData);
  };

  constructor(
    private cdr: ChangeDetectorRef,
    private httpClient: HttpClient,
    private renderer: Renderer2 //public router: Router
  ) {}

  async reloadDiagram(e: { data: go.ObjectData[]; modelData: go.ObjectData; }) {
    // this.myDiagramComponent.diagram.model.nodeDataArray = e.data;
    // this.myDiagramComponent.diagram.model.modelData = e.modelData;
    // this.showLegends = e.modelData.showLegends;

    // if (this.legendsDisplayed !== e.modelData.showLegends) {
    //   await this.ShowHideLegends();
    // }

    // if (this.myDiagramComponent.diagram.model.modelData.fitType === 'Fit to Rect') {
    //   this.myDiagramComponent.diagram.zoomToRect(this.myDiagramComponent.diagram.documentBounds, go.Diagram.UniformToFill);
    //   this.myDiagramComponent.diagram.requestUpdate();
    // } else {
    //   this.fitToScreen();
    // }
    // this.myDiagramComponent.diagram.requestUpdate();
    // this.myDiagramComponent.diagram.model.commitTransaction('updated' );

  }


  public observedDiagram: go.Diagram | undefined;

  // currently selected node; for inspector
  public selectedNode: go.Node | null = null;

  // // Overview Component testing
  // public oDivClassName = 'myOverviewDiv';
  // public initOverview(): go.Overview {
  //   const $ = go.GraphObject.make;
  //   const overview = $(go.Overview);
  //   return overview;
  // }
  // public observedDiagram = null;

  // // currently selected node; for inspector
  // public selectedNode: go.Node | null = null;

  ngOnInit() {
    this.diagramModelData = <go.ObjectData>this.diagramModelDataInput;    
    this.diagramNodeData = <any>this.diagramNodeDataInput;
  }

  public ngAfterViewInit() {
    if (this.observedDiagram) { return; }
    this.observedDiagram = this.myDiagramComponent?.diagram;
    this.cdr.detectChanges(); // IMPORTANT: without this, Angular will throw ExpressionChangedAfterItHasBeenCheckedError (dev mode only)

    const appComp: PackedLayoutDiagramComponent = this;
    // for track single and double click
    let myLastClick = 0;
    // listener for inspector
    this.myDiagramComponent?.diagram.addDiagramListener('ChangedSelection', function (e) {
      e.diagram.setInputOption('parentColor', 'red');
      if (e.diagram.selection.count === 0) {
        appComp.selectedNode = null;
      }
      const node = e.diagram.selection.first();
      if (node instanceof go.Node) {
        appComp.selectedNode = node;
      } else {
        appComp.selectedNode = null;
      }
    });

    //on node or group double click, trigger event
    this.myDiagramComponent?.diagram.addDiagramListener('ObjectDoubleClicked', function (e) {
      //alert('double click');
      myLastClick = e.diagram.lastInput.timestamp;
      if (e.subject.Ui !== undefined && e.subject.Ui.Qa !== '') {
        // console.log('clicked button');
      } else {
        let isClickable = false;
        // const guidKey = appComp.myDiagramComponent.diagram.model.modelData.blockId + '' + e.subject.part.data.key;
        const queries = appComp.myDiagramComponent?.diagram.model.modelData.queries;
        if (typeof queries[e.subject.part.data.level - 1] !== 'undefined') {
          if (queries[e.subject.part.data.level - 1].isClickableQueryEnabled && queries[e.subject.part.data.level - 1].clickableQuery !== '') {
            isClickable = true;
          }
        }
        if (e.subject.part.data.isGroup) {
          if (isClickable === true) {
            if (e.subject.part.data.level === 0) {
            } else {
            }
          }
        } else {
          if (e.subject.part.data?.guid) {
          }
        }
      }
    });

    // on node or group click, trigger event
    this.myDiagramComponent?.diagram.addDiagramListener('ObjectSingleClicked', function (e) {
      // [GS] the below condition for handle single click or double click both case called this listener so we are validate here
      if (e.diagram.lastInput.clickCount === 1) {
        var time = e.diagram.lastInput.timestamp;
        myLastClick = time;
        setTimeout(function () {
          if (myLastClick === time) {
            if (e.subject.Ui !== undefined && e.subject.Ui.Qa !== '') {
               // console.log('clicked button');
            } else {
              let isClickable = false;
              const guidKey = appComp.myDiagramComponent?.diagram.model.modelData.blockId + '' + e.subject.part.data.key;
              const queries = appComp.myDiagramComponent?.diagram.model.modelData.queries;
              if (typeof queries[e.subject.part.data.level - 1] !== 'undefined') {
                if (queries[e.subject.part.data.level - 1].isClickableQueryEnabled && queries[e.subject.part.data.level - 1].clickableQuery !== '') {
                  isClickable = true;
                }
              }
              if (e.subject.part.data.isGroup) {
                if (isClickable === true) {
                  if (e.subject.part.data.level === 0) {
                  } else {
                  }
                }
              } else {
              }
            }
          }
        }, 500);
      }
    });

    // on screen size change, redraw landscape diagram
    // const fitToRect = 'Fit to rect';
    // this.myDiagramComponent?.diagram.addDiagramListener('ViewportBoundsChanged', function (e) {
    //   setTimeout(() => {
    //     if ((e?.diagram?.div?.clientHeight !== appComp?.diagramHeight) || (appComp?.diagramWidth !== e?.diagram?.div.clientWidth)) {
    //       appComp.diagramWidth = e.diagram.div.clientWidth;
    //       appComp.diagramHeight = e.diagram.div.clientHeight;
    //       if (appComp.myDiagramComponent.diagram.model.modelData.fitType === fitToRect) {
    //          appComp.myDiagramComponent.diagram.zoomToRect(appComp.myDiagramComponent.diagram.documentBounds, go.Diagram.UniformToFill);
    //       } else {
    //         appComp.fitToScreen();
    //       }
    //       appComp.myDiagramComponent.diagram.requestUpdate();
    //     }
    //   }, 300);
    // });
    return false;
  } // end ngAfterViewInit


  /**
  * Description: Fit the diagram to fill its full width in rect manner
  * Author: Ravi
  *
  * */
   fitToRectScreen() {
    setTimeout(() => {
      this.myDiagramComponent?.diagram.zoomToRect(this.myDiagramComponent.diagram.documentBounds, go.Diagram.UniformToFill);
      this.myDiagramComponent?.diagram.requestUpdate();
    }, 500);
  }


/**
 * Description: Fits the diagram to its height and width
 * Author: Ravi
 *
 * */
  fitToScreen() {
    setTimeout(() => {
        this.myDiagramComponent?.diagram.commandHandler.zoomToFit();
      this.myDiagramComponent?.diagram.requestUpdate();
    }, 200);
  }

  // fitToRectScreen() {
  //   this.myDiagramComponent.diagram.zoomToRect(
  //     this.myDiagramComponent.diagram.documentBounds,
  //     go.Diagram.UniformToFill
  //   );
  //   this.myDiagramComponent.diagram.requestUpdate();
  // }

  // fitToScreen() {
  //   this.myDiagramComponent.diagram.commandHandler.zoomToFit();
  //   this.myDiagramComponent.diagram.requestUpdate();
  // }

  maximize() {}

  ShowHideLegends() {
    // var div = this.myDiagramComponent.diagram.div;

    // if (this.legendsDisplayed) {
    //   this.showLegends = !this.showLegends;
    //   div.style.width = '1600px';
    //   this.legendsDisplayed = false;
    // } else {
    //   div.style.width = '1000px';
    //   this.legendsDisplayed = true;
    // }

    //this.renderer.setStyle(this.linkElement.nativeElement, "display", "none");

    //this.renderer.setStyle(this.myDiagramDiv.nativeElement, 'width', `1600px`);
    //console.log(this.myDiagramDiv.nativeElement);
    //this.renderer.setStyle(this.renderer.selectRootElement('.myDiagramDiv'), 'width', `1600px`);
    //this.myDiagramComponent.diagram.zoomToRect( this.myDiagramComponent.diagram.documentBounds, go.Diagram.UniformToFill );
    //this.myDiagramComponent.diagram.requestUpdate();
    //this.fitToRectScreen();
    setTimeout(() => {
      //alert();
      this.fitToRectScreen();

      if (this.legendsDisplayed) {
        this.showLegends = !this.showLegends;
      }
    }, 500);
  }

}
