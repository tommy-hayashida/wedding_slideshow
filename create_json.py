#!/usr/bin/env python
# -*- coding: utf-8 -*-

from PIL import Image
from PIL.ExifTags import TAGS
import os
import json
import collections as cl
import time


def get_exif_of_image(file):
    """Get EXIF of an image if exists.

    指定した画像のEXIFデータを取り出す関数
    @return exif_table Exif データを格納した辞書
    """
    im = Image.open(file)

    # Exif データを取得
    # 存在しなければそのまま終了 空の辞書を返す
    try:
        exif = im._getexif()
    except AttributeError:
        return {}

    # exifがないとき?
    if exif == None:
        return -1

    # タグIDそのままでは人が読めないのでデコードして
    # テーブルに格納する
    exif_table = {}
    for tag_id, value in exif.items():
        tag = TAGS.get(tag_id, tag_id)
        exif_table[tag] = value

    return exif_table


def get_exif_rotation(orientation_num):
    """
    ExifのRotationの数値から、回転する数値と、ミラー反転するかどうかを取得する
    return 回転度数,反転するか(0 1)
    # 参考: https://qiita.com/minodisk/items/b7bab1b3f351f72d534b
    """
    if orientation_num == 0:
        return 0
    if orientation_num == 1:
        return 0
    if orientation_num == 2:
        return 0
    if orientation_num == 3:
        return 180
    if orientation_num == 4:
        return 180
    if orientation_num == 5:
        return 270
    if orientation_num == 6:
        return 270
    if orientation_num == 7:
        return 90
    if orientation_num == 8:
        return 90

    
def rotation_img(exif, path, source_dir):
    to_save_path = source_dir + '/' + path

    if exif == -1:
        rotate = 0
    elif 'Orientation' in exif:
        rotate = get_exif_rotation(exif['Orientation'])
    else:
        rotate = 0

    if rotate != 0:
        with Image.open(source_dir + path) as img:
            data = img.getdata()
            mode = img.mode
            size = img.size
            
            with Image.new(mode, size) as dst:
                dst.putdata(data)
                #if reverse == 1:
                #dst = ImageOps.mirror(dst) # 要デバッグ
                    
                dst = dst.rotate(rotate, expand=True)
                dst.save(to_save_path)
    return 0



def main():
    while(1):
        source_dir = '/path/to/img_dir/' # Dropboxと連携して写真が保存されるフォルダ
        imgListName = 'imgList.json' # 写真リスト
        
        with open(imgListName, mode='r') as f:
            JsonData = json.load(f)
            imgListJson = [a["src"] for a in JsonData]
            
        imgList = os.listdir(source_dir)

        if len(imgListJson) > 0:
            noJsonImg = list(set(imgList) - set(imgListJson))
        else:
            noJsonImg = imgList

        if len(noJsonImg) > 0:
            # 画像を正しく回転させる
            for img_path in noJsonImg:
                try:
                    exif = get_exif_of_image(source_dir + img_path)
                except:
                    os.remove(source_dir + img_path)
                    imgList.remove(img_path)
                    print('remove')
                else:
                    rotation_img(exif, img_path, source_dir)

        writeData = []
        for i in range(len(imgList)):
            imgData = cl.OrderedDict()
            imgData["flag"] = 0
            imgData["src"] = imgList[i]
            writeData.append(imgData)

        if len(noJsonImg) > 0:
            with open(imgListName, mode='w') as f:
                json.dump(writeData, f, ensure_ascii=False, indent=4, sort_keys=True, separators=(',', ': '))
                print('write')

        time.sleep(1)


if __name__ == '__main__':
    main()
